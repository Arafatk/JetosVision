import {
  Answer,
  FaqMainContainer,
  ArrowBox,
  FaqHead,
  FaqList,
  FaqSection,
  ListItem,
  Question,
} from "./index.styled";

import ArrowUp from "./../../assests/icons/arrow_up.svg";
import ArrowDown from "./../../assests/icons/arrow_down.svg";
import { useState } from "react";

const faqData = [
  {
    question: "What is this application about?",
    answer: "This application lets you chat with any PDF document you upload.",
  },
  {
    question: "What if I have a question that the AI can't answer?",
    answer:
      " If the answer lies in the uploaded PDF, then there's a high likelihood that the AI will answer it correctly. Note that the AI is constantly learning, so if it cannot answer your question, you can always ask a different question.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <FaqSection>
      <FaqHead>FAQ</FaqHead>
      <FaqMainContainer>

     
      <FaqList>
        {faqData &&
          faqData.map((faq, index) => {
            return (
              <ListItem key={index}>
                <Question onClick={() => handleClick(index)}>
                  {faq.question}
                  {openIndex === index ? (
                    <ArrowBox>
                      <img src={ArrowUp} alt="arrow_up" />
                    </ArrowBox>
                  ) : (
                    <ArrowBox>
                      <img src={ArrowDown} alt="arrow_down" />
                    </ArrowBox>
                  )}
                </Question>
                <Answer>{openIndex === index && <p>{faq.answer}</p>}</Answer>
              </ListItem>
            );
          })}
      </FaqList>
      </FaqMainContainer>
    </FaqSection>
  );
};

export default Faq;
