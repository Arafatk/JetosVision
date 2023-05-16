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
import { useEffect, useState } from "react";
import ProjectModal from "../ProjectModal";
import Sidebar from "../Sidebar";
import { apiUrl } from "../../constants";

const CreateProjectScreen = () => {
  const navigate = useNavigate();
  const [isCreateProjectModal, setIsCreateProjectModal] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleProjects = async (text) => {
    const response = await fetch(apiUrl + "/create_namespaces", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(`token`)}`,
      },
      body: JSON.stringify({ namespace: text }),
    });
    if (response.ok) {
      setIsCreateProjectModal(!isCreateProjectModal);
    } else {
      console.error("Error creating  Project");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch(apiUrl + "/list_namespaces", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProjects(data.namespaces);
        } else {
          console.log("error");
        }
      }
    };
    fetchData();
  }, [isCreateProjectModal]);

  const handleProject = (projectName) => {
    navigate("/projectscreen/" + projectName);
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
              {projects.map((project, index) => {
                return (
                  <CreateProjectBox
                    key={index}
                    onClick={() => handleProject(project)}
                  >
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
