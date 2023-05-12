import React, { useState, useRef, useEffect } from "react";
import {
  Blackwrapper,
  Whitetext,
  Bluetext,
  Textbox2,
  CreateButton,
} from "./index.styled";
import "./index.css";
import UploadLogo from "../../assests/icons/upload.png";
import FileList from "../FileList";



import { useNavigate } from "react-router-dom";
import HowItWorks from "../HowItWorks";
import Faq from "../Faq";
import AboutSection from "../AboutSection";

const MainScreen = () => {
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
          const data = await response.json();
          setUserMessage(data.message);
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
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        {/* <Bluetext>User Message: {userMessage}</Bluetext> */}
        <Bluetext>Your Personal Research assistant</Bluetext>
        <Textbox2>
          Attach all documents you want to source information from
        </Textbox2>
        {/* {files.length !== 0 && (
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
        </FileInputContainer> */}
        <CreateButton
          onClick={() => navigate("/signIn")}
          style={{ background: btnBackground, color: btnTextColor }}
        >
          Create assistant
        </CreateButton>

        {/* move to different component */}

        <HowItWorks />

        <AboutSection />

        <Faq />
      </Blackwrapper>
    </>
  );
};

export default MainScreen;
