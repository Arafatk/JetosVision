import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
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
  flex: 10;
  border: 2px solid #3e3e3e;
  height: 100vh;
`;

export const TopOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoutContainer = styled.div`
  margin: 18px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  margin: 28px;
  cursor: pointer;
`;

export const CreateProjectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 300px;
  border-radius: 63px;
  border: 3px solid;

  border: 3px dotted #3E3D42;

 

  margin: 28px;
  flex-direction: column;
`;

export const CreateText = styled.div`
  margin-top: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #f2f2f2;
`;
