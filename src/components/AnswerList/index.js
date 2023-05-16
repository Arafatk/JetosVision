import { useEffect } from "react";
import {
  MainContainer,
  SecondaryContainer,
  Question,
  Answer,
} from "./index.styled";

const AnswerList = (props) => {
  const { data } = props;
  useEffect(() => {}, [data]);
  return (
    <MainContainer>
      {data
        .slice()
        .reverse()
        .map((param, index) => {
          return (
            <SecondaryContainer key={index}>
              <Question>{param.question}</Question>
              <Answer>{param.answer}</Answer>
            </SecondaryContainer>
          );
        })}
    </MainContainer>
  );
};

export default AnswerList;
