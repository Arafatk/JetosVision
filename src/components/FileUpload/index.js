import React, { useState, useRef, useEffect } from "react";
import {
  FileInput,
  Textboxdrop,
  Blackwrapper,
  Whitetext,
  Bluetext,
  Textbox2,
  CreateButton,
  FileInputContainer,
  ImageIcon,
  FileInputDropBox,
  FileInputPlaceholder,
  FileListContainer,
  HowItWorks,
  HowItWorksText,
  WorksContainer,
  WorksContainerItem,
  WorksContainerText,
  WorkIcon,
  WorkNum,
  AboutSection,
  ItemSecion,
  ItemIcon,
  ItemHead,
  ItemPara,
  FaqSection,
  FaqHead,
  FaqList,
  ListItem,
  Question,
  ArrowBox,
  Arrow,
  Answer,
} from "./index.styled";
import "./index.css";
import UploadLogo from "../../assests/icons/upload.png";
import FileList from "../FileList";

// Images for icons and other sections

import project from "./../../assests/work/project.svg";
import docs from "./../../assests/work/docs.svg";
import process from "./../../assests/work/process.svg";
import question from "./../../assests/work/question.svg";

import timer from "./../../assests/work/first.svg";
import data from "./../../assests/work/data.svg";
import accuracy from "./../../assests/work/accuracy.svg";

import { useNavigate } from "react-router-dom";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [userMessage, setUserMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  

  const onFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const MAX_FILES = 5;
    const MAX_FILE_SIZE = 1048576 * 10;
    let invalidFiles = [];
    if (newFiles.length > MAX_FILES) {
      invalidFiles.push(
        `You can upload a maximum of ${MAX_FILES} files at once`
      );
    }
    newFiles.forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        invalidFiles.push(`${file.name} exceeds the maximum file size of 10MB`);
      }
    });

    if (invalidFiles.length > 0) {
      alert(invalidFiles.join("\n"));
      return;
    }
    setFiles((prevSelectedFiles) => [...prevSelectedFiles, ...newFiles]);
  };

  const onRemoveFile = (index) => {
    const newFileArray = files.filter((item, indexID) => indexID !== index);
    setFiles(newFileArray);
  };

  const onDragIn = () => {
    if (fileInputRef.current) {
      fileInputRef.current.classList.add(`dragOpacity`);
    }
  };
  const onDragOut = () => {
    if (fileInputRef.current) {
      fileInputRef.current.classList.remove(`dragOpacity`);
    }
  };
  const onDrop = () => {
    if (fileInputRef.current) {
      fileInputRef.current.classList.remove(`dragOpacity`);
    }
  };

  //fetch user message
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch("/hello", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (response.ok) {
         const  data = await response.json()
         setUserMessage(data.message)
        } else {
          console.log("error");
        }
      }
    };
    fetchData();
  }, []);

  const uploadFiles = async (files) => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      const response = await fetch("/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      if (response.ok) {
        console.log(response);
        navigate("/askme");
      } else {
        throw Error("error uploading files");
      }
    } catch (error) {
      throw new Error(`Error uploading files: ${error.message}`);
    }
  };

  let btnBackground = files.length !== 0 ? "#FFFFFF" : "#1b1b1b";
  let btnTextColor = files.length !== 0 ? "#000000" : "#828282";
  return (
    <>
      <Blackwrapper>
        <Whitetext> Pagewhisperer</Whitetext>
        <Bluetext> {userMessage}</Bluetext>
        <Bluetext>Your Personal Research assistant</Bluetext>
        <Textbox2>
          Attach all documents you want to source information from
        </Textbox2>
        {files.length !== 0 && (
          <FileListContainer>
            <FileList files={files} onRemoveFile={onRemoveFile} />
          </FileListContainer>
        )}
        <FileInputContainer>
          <FileInputDropBox
            ref={fileInputRef}
            className="fileInput"
            onDragEnter={onDragIn}
            onDragLeave={onDragOut}
            onDrop={onDrop}
          >
            <FileInput
              className="fileInput"
              type="file"
              multiple
              onChange={onFileChange}
            ></FileInput>
            <FileInputPlaceholder>
              <ImageIcon src={UploadLogo} alt="upload_image" />
              <Textboxdrop>Choose/Drop PDF files</Textboxdrop>
            </FileInputPlaceholder>
          </FileInputDropBox>
        </FileInputContainer>
        <CreateButton
          onClick={() => uploadFiles(files)}
          style={{ background: btnBackground, color: btnTextColor }}
        >
          Create assistant
        </CreateButton>

        {/* move to different component */}

        <HowItWorks>
          <HowItWorksText>How It Works</HowItWorksText>

          <WorksContainer>
            <WorksContainerItem>
              <WorksContainerText>Define Your Project</WorksContainerText>
              <WorkIcon>
                <img src={project} alt="animg" />
              </WorkIcon>
              <WorkNum>
                <span>01</span>
              </WorkNum>
            </WorksContainerItem>

            <WorksContainerItem>
              <WorksContainerText>
                Upload all the project documents
              </WorksContainerText>
              <WorkIcon>
                <img src={docs} alt="animg" />
              </WorkIcon>
              <WorkNum>
                <span>02</span>
              </WorkNum>
            </WorksContainerItem>

            <WorksContainerItem>
              <WorksContainerText>
                Pagewhisperer Processes your documents
              </WorksContainerText>
              <WorkIcon>
                <img src={process} alt="animg" />
              </WorkIcon>
              <WorkNum>
                <span>03</span>
              </WorkNum>
            </WorksContainerItem>

            <WorksContainerItem>
              <WorksContainerText>Ask any question</WorksContainerText>
              <WorkIcon>
                <img src={question} alt="animg" />
              </WorkIcon>
              <WorkNum>
                <span>04</span>
              </WorkNum>
            </WorksContainerItem>
          </WorksContainer>
        </HowItWorks>

        <AboutSection>
          <ItemSecion>
            <ItemIcon>
              <img src={timer} alt="animg" />
            </ItemIcon>
            <ItemHead>Save hours wasted</ItemHead>
            <ItemPara>
              Go through thousands of lines of fine print in a matter of
              minutes. Once Pagewhisperer processes your documents, get your
              questions answered in seconds.
            </ItemPara>
          </ItemSecion>

          <ItemSecion>
            <ItemIcon>
              <img src={data} alt="animg" />
            </ItemIcon>
            <ItemHead>Control your data</ItemHead>
            <ItemPara>
              Pagewhisperer uses secure data rooms that don’t save your
              information. View all logs of access and delete them when you’re
              done
            </ItemPara>
          </ItemSecion>

          <ItemSecion>
            <ItemIcon>
              <img src={accuracy} alt="animg" />
            </ItemIcon>
            <ItemHead>Accuracy you need</ItemHead>
            <ItemPara>
              Find the clause you’re looking for or a paraphrased version of it.
              Reference the exact locations in the source document.
            </ItemPara>
          </ItemSecion>
        </AboutSection>

        <FaqSection>
          <FaqHead>FAQ</FaqHead>

          <FaqList>
            <ListItem>
              <Question>
                What is this application about?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                This application lets you chat with any PDF document you upload.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                What if I have a question that the AI can't answer?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                If the answer lies in the uploaded PDF, then there’s a high
                likelihood that the AI will answer it correctly. Note that the
                AI is constantly learning, so if it cannot answer your question,
                you can always ask a different question.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                Is there a limit to the size of the PDF document that can be
                uploaded?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                Yes, the maximum limit of the PDF document that can be uploaded
                is 20 MB.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                Does Pagewhisperer have any limitations on the number of PDF
                documents that can be uploaded per day?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                No, there are no limitations on the number of PDF documents that
                can be uploaded per day.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                Can I upload password-protected PDF documents to Pagewhisperer?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                No, you cannot upload password-protected PDF documents to
                AskYourPdf.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                How long are the chat sessions saved on Pagewhisperer?{" "}
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                The chat session is available as long as the tab is open.
              </Answer>
            </ListItem>

            <ListItem>
              <Question>
                Can I use Pagewhisperer on any device?
                <ArrowBox>
                  <Arrow>^</Arrow>
                </ArrowBox>
              </Question>
              <Answer>
                Yes, Pagewhisperer is accessible from any device with an
                internet connection.
              </Answer>
            </ListItem>
          </FaqList>
        </FaqSection>
      </Blackwrapper>
    </>
  );
};

export default FileUpload;
