import styled from "styled-components";
export const FileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  width: 100%;
  margin: 1rem auto;
  flex-direction: row;
  flex-wrap: wrap;
  max-height: 300px;
  overflow-y:scroll;
`;

export const MainContainer = styled.div`
  width: 330px;
  height: 69px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 16px;

  padding: 4px 8px 4px 8px;
  border: 2px solid #ffffff60;
  margin: 8px;
`;

export const FileNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justtify-content: center;
  gap: 18px;
  img:{
    user-select:none
  }
`;

export const ImageText = styled.div`
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #e0e0e0;
  flex: none;
  user-select:none
`;

export const RemoveImage = styled.img`
  cursor: pointer;
`;
