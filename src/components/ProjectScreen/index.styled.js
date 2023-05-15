import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
`;

export const Box1 = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333333;
  flex-direction: column;
`;

export const Box2 = styled.div`
  flex: 9;
  width: 100%;
  border: 2px solid #3e3e3e;
  display: flex;
  position: relative;
  align-item: center;
  justify-content: center;
`;

export const Box3 = styled.div`
  flex: 2;
  padding: 2px;
  overflow-y: scroll;
  border: 2px solid #3e3e3e;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrimaryContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 18px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const ProjectName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #f2f2f2;
  margin-top: 4rem;
  margin-left: 2rem;
`;

export const ChatBoxContainer = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;

  display: flex;
  justify-content: center;

  border: 2px solid #3e3e3e;
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 1rem auto;
  align-items: center;
  justify-content: center;
  // gap: 12px;
`;

export const ProjectDataContainer = styled.div`
width: 100%;
heigth: 100%
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
