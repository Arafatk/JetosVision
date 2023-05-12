import styled from "styled-components";

export const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  ${'' /* Changed */}
`;

export const Textboxdrop = styled.div`
  font-family: "Inter";
  font-style: normal;
  padding-top: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #f2f2f2;

  ${'' /* Changed */}
  margin: 1rem auto;
  ${'' /* border: 2px solid white; */}

  @media(min-width: 680px) {
    font-size: 1.5rem;
  }

`;

export const Blackwrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${'' /* Changed */}
  ${'' /* border: 2px solid green; */}
  width: 90%;
  margin: 0rem auto;
  height: 100%;

  @media(min-width: 680px) {
    margin: 0.5rem auto;
  }

  @media(min-width: 1290px) {
  width: 80%;
  margin: 1rem auto;
}
  
`;
export const Whitetext = styled.div`
  
  ${'' /* height: 116px; */}
  
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;

  color: rgba(255, 255, 255, 0.95);
  text-align: center;

  ${'' /* Changed */}
  font-size: 1.5rem;
  width: 90%;
  margin: 0rem auto;
  padding: 0;
  line-height: 1.7;
  ${'' /* border: 2px solid red; */}

  @media(min-width: 680px) {
    font-size: 2.5rem;
    margin: 0.5rem auto;
  }

`;
export const Bluetext = styled.div`
 
  font-family: "Inter";
  font-style: normal;
  font-weight: 1000;
  text-align: center;

  ${'' /* Changed */}
  width: 90%;
  margin: 0rem auto;
  font-size: 2rem;
  line-height: 1.7;
  ${'' /* border: 2px solid gray; */}


  background: linear-gradient(180deg, #7577ff 0%, #4c4dbb 100%);
  -webkit-background-clip: text;
  color: transparent;

  @media(min-width: 680px) {
    height: 4rem;
    font-size: 3rem;
    line-height: 1;
    margin: 0.5rem auto;
  }

`;
export const Textbox2 = styled.div`
  ${'' /* width: 548px; */}
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  ${'' /* font-size: 20px; */}
  line-height: 24px;
  color: #bdbdbd;
  margin-top: 22px;

  ${'' /* Changed */}
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.5;
  height: 4rem;
  width: 90%;
  ${'' /* border: 2px solid green; */}

  @media(min-width: 680px) {
    font-size: 1.5rem;
  }

`;

export const CreateButton = styled.button`
  ${'' /* margin-top: 50px; */}

  ${'' /* Changed */}
  width: 80%;
  margin-top: 1.25rem;
  ${'' /* border: 2px solid green; */}

  /* Buttons */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  width: 255px;
  height: 255px;

 border: 2px solid #3A393B;
  box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.2);
  border-radius: 64px;

  ${'' /* width: 255px; */}
  height: 61px;

  ${'' /* Changed */}
  font-size: 1.25rem;
  width: 15rem;
  margin: 2rem auto;
  ${'' /* border: 2px solid blue; */}

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  ${'' /* font-size: 18px; */}
  line-height: 19px;

  @media(min-width: 680px) {
    width: 20rem;
    margin: 4rem auto;
    font-size: 1.5rem;
  }
 
  transition: 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const FileInputContainer = styled.div`
  ${'' /* margin-top: 36px; */}
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  ${'' /* width: 1118px; */}

  ${'' /* Changed */}
  ${'' /* border: 2px solid green; */}
  width: 80%;
  margin: 2rem auto;

  min-height: 360px;
  border: 4px solid #03045e;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(48, 48, 48, 0.15) 0%,
    rgba(48, 48, 48, 0) 100%
  );
  backdrop-filter: blur(250px);
  box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.9);
  position: relative;
  border-radius: 63px;
`;

export const ImageIcon = styled.img`
 width: 72px;
 height: 84px;
 margin: 1rem auto;

 ${'' /* border: 2px solid green; */}

 @media(min-width: 680px) {
  width: 100px;
  height: 105px;
 }
`;
export const FileInputDropBox = styled.div`
  width: 1118px;
  min-height: 360px;
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 80%;

  ${'' /* Changed */}
  ${'' /* border: 2px solid blue; */}
  width: 100%;
  height: 100%;
  border-radius: 63px;
  ${'' /* border: 2px solid green; */}
`;

export const FileInputPlaceholder = styled.div`
  position: relative;
  z-index: -1;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* width: 500px; */}
  flex-direction: column;

  ${'' /* Changed */}
  width: 90%;
  margin: 0rem auto;
  ${'' /* border: 4px solid brown; */}
`;

export const FileListContainer = styled.div`
  margin: 8px
`;












