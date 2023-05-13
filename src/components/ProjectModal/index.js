import { useEffect, useState } from "react";
import {
  CreateButton,
  InputContainer,
  InputLabel,
  InputText,
  ModalContainer,
  ProjectDetails,
} from "./index.styled";

const ProjectModal = (props) => {
  const { handleProjects } = props;
  const [projectName, setProjectName] = useState("");

  return (
    <ModalContainer>
      <ProjectDetails>ProjectDetails</ProjectDetails>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <InputText
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
          placeholder="Enter Project Name"
        ></InputText>
      </InputContainer>
      <CreateButton
        onClick={() => {
          handleProjects(projectName);
          setProjectName("");
        }}
      >
        Create Project
      </CreateButton>
    </ModalContainer>
  );
};

export default ProjectModal;
