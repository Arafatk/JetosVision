import styled from "styled-components";

export const MainContainer = styled.div`
 
  width: 100%;
  height: auto;
  max-height: 80vh;
  display: flex;
  
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(48, 48, 48, 0.15) 0%,
    rgba(48, 48, 48, 0) 100%
  );
  backdrop-filter: blur(250px);
  // border-radius: 10px;
  will-change: transform;
  // border: 1px solid gray;
  padding: 3rem;
 
  margin-top: 0.5rem;
  margin-bottom: 5rem;
  overflow-y: auto;
`;

export const SecondaryContainer = styled.div`
 
  width: 100%;
  height: auto;
  background: linear-gradient(
    180deg,
    rgba(48, 48, 48, 0.15) 0%,
    rgba(48, 48, 48, 0) 100%
  );
  backdrop-filter: blur(250px);
  border-radius: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  border: 1px solid grey;
  padding: 0.75rem;

  @media(min-width: 480px) {
  width: 95%;
  margin: 0.5rem auto;

  }
`;

export const Question = styled.div`
  width: 95%;
  height: auto;
  margin: 0.2rem auto;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #e0e0e0;
  padding: 0.3rem;
  
  @media(min-width: 990px) {
    margin: 0.5rem auto;
    font-size: 1.5rem;
  }
`;

export const Answer = styled.div`
  width: 95%;
  height: auto;
  margin: 0.75rem auto;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.35rem;
  line-height: 1.75;
  color: #bdbdbd;
  padding: 0.3rem;

  @media(min-width: 990px) {
    margin: 1.25rem auto;
    font-size: 1.5rem;
  }
`;
