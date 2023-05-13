import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  cursor: pointer;
`;

export const FileInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 338px;
  height: 150px;
  padding: 24px 0px;
  border: 3px dotted #706f73;
  flex-direction: column;
  border-radius: 32px;
`;

export const ImageIcon = styled.img``;

export const Textboxdrop = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px; 
color: #F2F2F2;
  
  margin: 1rem auto;
  

 
`;

export const FileInputDropBox = styled.div`
  width: auto;
  min-height: 300px;
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 80%;

 
  width: 100%;
  height: 100%;
  border-radius: 63px;
 
`;

export const FileInputPlaceholder = styled.div`
  position: relative;
  z-index: -1;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
  flex-direction: column;
  width: 90%;
  margin: 0rem auto;
 
`;

export const CreateButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  border: 2px solid #3a393b;
  box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.2);
  border-radius: 64px;

  height: 61px;
  width: 280px;

  font-size: 1.25rem;

  margin: 1.5rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;

  line-height: 19px;

  transition: 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.1);
  }
`;


export const FileListContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const  FileContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #E0E0E0;
`