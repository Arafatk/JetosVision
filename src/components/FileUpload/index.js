import { useNavigate } from "react-router-dom";
import {
  FileInputContainer,
  FileInputDropBox,
  FileInputPlaceholder,
  FileInput,
  ImageIcon,
  Textboxdrop,
  CreateButton,
  MainContainer,
  FileListContainer,
  FileContainer,
} from "./index.styled";
import { useState, useEffect, useRef } from "react";
import UploadLogo from "../../assests/icons/paper_upload.svg";
import FileList from "../FileList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StatusCodeError, apiUrl } from "../../constants";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [message, setMessage] = useState();
  const [allFiles, setAllFiles] = useState();
  const navigate = useNavigate();
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

  useEffect(() => {
    console.log(files);
  }, [files]);

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
          setAllFiles(data);
        } else {
          console.log("error");
        }
      }
    };
    fetchData();
  }, []);

  const uploadFiles = async (files) => {
    let t = toast.loading("Uploading files");
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      const response = await fetch(apiUrl + "/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (response.ok) {
        toast.update(t, {
          render: "File Uploaded successfully",
          type: "success",
          isLoading: false,
        });
        setFiles("");
      } else if (response.status === 400) {
        toast.update(t, {
          render: StatusCodeError[400],
          type: "error",
          isLoading: false,
        });

        setFiles("");
      } else if (response.status === 401) {
        toast.update(t, {
          render: StatusCodeError[401],
          type: "error",
          isLoading: false,
        });
        setFiles("");
      }
    } catch (error) {
      console.log(error);
      toast.warn(`Error uploading ${error.message}`);
      throw new Error(`Error uploading files: ${error.message}`);
    }
  };

  let btnBackground = files.length !== 0 ? "#FFFFFF" : "#1b1b1b";
  let btnTextColor = files.length !== 0 ? "#000000" : "#828282";
  return (
    <>
      <ToastContainer theme="dark" />
      <MainContainer>
        <FileList files={files} onRemoveFile={onRemoveFile} />
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
        {files.length !== 0 && (
          <CreateButton
            onClick={() => uploadFiles(files)}
            style={{ background: btnBackground, color: btnTextColor }}
          >
            Create assistant
          </CreateButton>
        )}
      </MainContainer>
    </>
  );
};

export default FileUpload;
