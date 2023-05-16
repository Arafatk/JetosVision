import styled from "styled-components";




export const HowItWorkMains = styled.div`
  width: 90%;
  height: auto;
  margin: 1rem auto;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1;
  text-transform: uppercase;

  color: #BDBDBD;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media(min-width: 1290px) {
    width: 100%;
    border:
    margin: 1rem auto;
  }
`;

export const HowItWorksText = styled.div`

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 3;
  text-align: center;

  color: #E0E0E0;

  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;

  @media(min-width: 620px) {
    font-size: 2.25rem;
  }
  
  @media(min-width: 1290px) {
    font-size: 3rem;
  }
`;

export const WorksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0px;
  gap: 21px;
  width: 90%;
  margin: 1rem auto;
  height: auto;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  
`;


export const WorksContainerItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  margin: 2rem auto;
  gap: 10px;
  width: 253.75px;
  height: 280px;

  background: linear-gradient(180deg, #121212 0%, rgba(48, 48, 48, 0.25) 100%);
  backdrop-filter: blur(250px);
  border-radius: 32px;
`;

export const WorksContainerText = styled.div`
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 2;
  color: #E0E0E0;
  text-align: center;
  
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;
  position: relative;

  @media(min-width: 620px) {
    font-size: 0.9rem;
  }
  @media(min-width: 1290px) {
    font-size: 1rem;
  }
`;

export const WorkIcon = styled.div`
  height: 5rem;
  width: 5rem;
  margin: 0.2rem auto;
  position: relative;

  ${'' /* position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%; */}

  ${'' /* background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%); */}
  opacity: 0.75;

  ${'' /* position: absolute;
  left: 27.58%;
  right: 27.63%;
  top: 57.46%;
  bottom: 36.29%; */}

  ${'' /* position: absolute;
  left: 35%;
  right: 45%;
  top: 40%;
  bottom: 8.33%; */}

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;

    
  }

`;

export const WorkNum = styled.div`
  
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 14px 10px;
gap: 10px;

position: absolute;
width: auto;
height: auto;
left: calc(50% - 52px/2 + 0.12px);
top: -29px;

background: linear-gradient(180deg, #121212 0%, #121212 100%);
box-shadow: 0px 0px 25px #000000;
backdrop-filter: blur(250px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 32px;

/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
z-index: 2;
 span {
  
  width: auto;
  height: auto;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1;

  background: linear-gradient(180deg, #7577FF 0%, #4C4DBB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  flex: none;
  order: 0;
  flex-grow: 0;
}

`;

