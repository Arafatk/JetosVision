import {
  Box1,
  Box2,
  Box3,
  MainContainer,
  PrimaryContainer,
  ProjectName,
  ChatBoxContainer,
  AnswerContainer,
  ProjectDataContainer,
} from "./index.styled";
import Sidebar from "../Sidebar";
import FileUpload from "../FileUpload";
import AskMe from "../AskMe";
import { useEffect, useState } from "react";
import AnswerList from "../AnswerList";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileList from "../FileList";

const ProjectScreen = () => {
  const { projectname } = useParams();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const [data, setData] = useState();
  const allData = (history) => {
    setData(history);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch(apiUrl + "/files", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUploadedFiles(data.files);
        } else {
          toast.error("Error fetching files");
        }
      }
    };
    fetchData();
  }, []);

  return (
    <MainContainer>
      <Box1>
        <Sidebar />
      </Box1>
      <Box2>
        <ProjectDataContainer>
          <ProjectName>{projectname}</ProjectName>

          {data && data.length !== 0 ? (
            <AnswerContainer>
              <AnswerList data={data} />
            </AnswerContainer>
          ) : null}
        </ProjectDataContainer>

        <ChatBoxContainer>
          <AskMe allData={allData} />
        </ChatBoxContainer>
      </Box2>
      <Box3>
      <FileList files={uploadedFiles} onRemoveFile={() => {}} />
        <PrimaryContainer>
         
          <FileUpload />
        </PrimaryContainer>
      </Box3>
    </MainContainer>
  );
};

export default ProjectScreen;
