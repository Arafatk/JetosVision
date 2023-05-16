import React, { useState, useRef, useEffect } from "react";
import {
  Blackwrapper,
  Whitetext,
  Bluetext,
  Textbox2,
  CreateButton,
} from "./index.styled";
import "./index.css";

import { useNavigate } from "react-router-dom";
import HowItWorks from "../HowItWorks";
import Faq from "../Faq";
import AboutSection from "../AboutSection";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [userMessage, setUserMessage] = useState(null);

  //fetch user message

  return (
    <>
      <Blackwrapper>
        <Whitetext> Pagewhisperer</Whitetext>
        <Bluetext>Your Personal Research assistant</Bluetext>
        <Textbox2>
          Attach all documents you want to source information from
        </Textbox2>

        <CreateButton onClick={() => navigate("/signIn")}>
          Create assistant
        </CreateButton>

        <HowItWorks />

        <AboutSection />

        <Faq />
      </Blackwrapper>
    </>
  );
};

export default FileUpload;
