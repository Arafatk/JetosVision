import { useNavigate } from "react-router-dom";
import {
  Box1,
  Box2,
  CreateProjectBox,
  MainContainer,
  CreateText,
  ProjectsContainer,
} from "./index.styled";

import Create from "../../assests/icons/create.svg";
import Folder from "../../assests/icons/folder.svg";
import { useState } from "react";
import ProjectModal from "../ProjectModal";
import Sidebar from "../Sidebar";

const CreateProjectScreen = () => {
  const [isCreateProjectModal, setIsCreateProjectModal] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleProjects = (text) => {
    setProjects([...projects, text]);
    setIsCreateProjectModal(!isCreateProjectModal);
  };

  

  return (
    <>
      {isCreateProjectModal && <ProjectModal handleProjects={handleProjects} />}

      <MainContainer>
        <Box1>
          <Sidebar />
        </Box1>
        <Box2>
          {projects.length !== 0 ? (
            <ProjectsContainer>
              <CreateProjectBox
                onClick={() => setIsCreateProjectModal(!isCreateProjectModal)}
              >
                <img src={Create} alt="folder_logo" />
                <CreateText>Create Project</CreateText>
              </CreateProjectBox>
              {projects.map((project) => {
                return (
                  <CreateProjectBox>
                    <img src={Folder} alt="navbar_logo" />
                    <CreateText>{project}</CreateText>
                  </CreateProjectBox>
                );
              })}
            </ProjectsContainer>
          ) : (
            <CreateProjectBox
              onClick={() => setIsCreateProjectModal(!isCreateProjectModal)}
            >
              <img src={Create} alt="folder_logo" />
              <CreateText>Create Project</CreateText>
            </CreateProjectBox>
          )}
        </Box2>
      </MainContainer>
    </>
  );
};

export default CreateProjectScreen;
