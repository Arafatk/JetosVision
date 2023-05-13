import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 389px;
  height: 324px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 63px;
  flex-direction: column;
  border: 2px solid #706f73;
  background: linear-gradient(
    180deg,
    rgba(48, 48, 48, 0.15) 0%,
    rgba(48, 48, 48, 0) 100%
  );
  z-index: 999;
  backdrop-filter: blur(250px);
`;

export const ProjectDetails = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #f2f2f2;
  margin-bottom: 18px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
`;
export const InputLabel = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  color: #bdbdbd;
`;
export const InputText = styled.input`
  border-radius: 32px;
  border: 2px solid #706f73;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #828282;
  width: 261px;
  height: 52px;
  background: #090909;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  padding: 8px 16px;
`;

export const CreateButton = styled.button`
  width: 261px;
  height: 51px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  margin-top: 14px;
  background: #5d5fef;
  box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.2);
  border-radius: 64px;
  border: 2px solid;

  border-image-source: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.1) 100%
  );

  box-shadow: 5px 5px 50px 0px rgba(70, 27, 194, 0.2);
  transition: 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.1);
  }
`;
