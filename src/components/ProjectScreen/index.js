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
import { useState } from "react";
import AnswerList from "../AnswerList";
import { useParams } from "react-router-dom";

const ProjectScreen = () => {
  const { projectname } = useParams();

  const [data, setData] = useState();
  const allData = (history) => {
    setData(history);
  };
  return (
    <MainContainer>
      <Box1>
        <Sidebar />
      </Box1>
      <Box2>
        <ProjectDataContainer>
          <ProjectName>{projectname}</ProjectName>
          <div>
            {data && data.length !== 0 ? (
              <AnswerContainer>
                <AnswerList data={data} />
              </AnswerContainer>
            ) : null}
          </div>
        </ProjectDataContainer>

        <ChatBoxContainer>
          <AskMe allData={allData} />
        </ChatBoxContainer>
      </Box2>
      <Box3>
        <PrimaryContainer>
          <FileUpload />
        </PrimaryContainer>
      </Box3>
    </MainContainer>
  );
};

export default ProjectScreen;
