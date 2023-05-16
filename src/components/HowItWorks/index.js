import React from "react";
import {
  HowItWorkMains,
  HowItWorksText,
  WorksContainer,
  WorksContainerItem,
  WorksContainerText,
  WorkIcon,
  WorkNum,
} from "./index.styled";

import project from "./../../assests/work/project.svg";
import docs from "./../../assests/work/docs.svg";
import process from "./../../assests/work/process.svg";
import question from "./../../assests/work/question.svg";

const HowItWorks = () => {
  return (
    <HowItWorkMains>
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
    </HowItWorkMains>
  );
};

export default HowItWorks;
