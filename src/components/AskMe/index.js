import React, { useState, useEffect } from "react";
import { Askbutton, Formmain, InputContainer } from "./index.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnswerList from "../AnswerList";
import { apiUrl } from "../../constants";

const openAiCompletion = async (userQuery, messages, onText) => {
  try {
    const apiKey =
      "Bearer " + "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";
    let answer = "";

    const queery = await fetch(apiUrl + "/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        query: userQuery, // Use the userQuery parameter instead of the hard-coded value
      }),
    })
      .then((queery) => {
        if (queery.ok) {
          return queery.json();
        } else {
          console.log("done");
        }
      })
      .then(async (data) => {
        console.log("Response data:", data);
        answer = data.answer; // Extract the "answer" value and assign it to the variable
        console.log("mine Answer:", answer);

        const secMessages = [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: answer },
        ];

        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: apiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messages: secMessages,
              model: "gpt-4",
              // max_tokens: 7048,
              temperature: 1,
              stream: true,
            }),
          }
        );
        if (!response.ok) {
          const errorText = await response.text();
          console.error("OpenAI API error:", errorText);
          throw new Error("OpenAI API error");
        }

        const decoder = new TextDecoder("utf8");
        const reader = response.body.getReader();

        let fullText = "";
        let lastFire = 0;

        async function read() {
          const { value, done } = await reader.read();

          if (done) return onText(fullText);

          const delta = decoder
            .decode(value)
            .match(/"delta":\s*({.*?"content":\s*".*?"})/)?.[1];

          if (delta) {
            const content = JSON.parse(delta).content;

            fullText += content;

            // Detects punctuation, if yes, fires onText once per .5 sec
            if (/[\p{P}\p{S}]/u.test(content)) {
              const now = Date.now();

              if (now - lastFire > 50) {
                lastFire = now;
                onText(fullText);
              }
            }
          }

          await read();
        }

        await read();

        return fullText;
      });
  } catch (error) {
    return error;
  }
};

export default function AskMe(props) {
  const { allData } = props;
  const [text, setText] = useState("");
  const [generatedTextt, setGeneratedText] = useState("");
  const [data, setData] = useState();

  const askRequest = async (event) => {
    const messages = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: text },
    ];

    const onText = (newText) => {
      setGeneratedText(newText);
      setData([...data, { question: text, answer: newText }]);
    };

    await openAiCompletion(text, messages, onText); // Pass the text variable as an argument
    setText(" ");
  };

  useEffect(() => {
    allData(data);
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch(apiUrl + "/chat_history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          toast.error("Error fetching chat history ");
        }
      }
    };
    fetchData();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Return") {
      handleKeyDown();
    }
  };
  return (
    <InputContainer>
      <ToastContainer />
      <Formmain
        placeholder="Enter your question"
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        value={text}
      ></Formmain>
      <Askbutton onClick={askRequest}>Ask</Askbutton>
    </InputContainer>
  );
}
