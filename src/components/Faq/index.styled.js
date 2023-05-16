import styled from "styled-components";


export const FaqSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  width: 95%;
  margin: 2rem auto;
  height: auto;

@media(min-width: 1290px) {
  width: 80%;
  margin: 2rem auto;
}

`;

export const FaqHead = styled.div`
  width: auto;
  height: auto;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 1;
text-transform: uppercase;
color: #BDBDBD;

@media(min-width: 1290px) {
  font-size: 1.25rem;
}

`;


export const  FaqMainContainer = styled.div`
box-sizing: border-box;
padding: 32px;
/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;

width: 100%;
height: auto;
overflow-y: scroll;

border: 2px solid #3E3E3E;
border-radius: 32px;
`

export const FaqList = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;

gap: 10px;

width: 100%;
height: auto;
overflow-y: scroll;

background: linear-gradient(180deg, rgba(48, 48, 48, 0.2) 0%, rgba(48, 48, 48, 0.2) 100%);
backdrop-filter: blur(250px);
border-radius: 32px;


`;

export const ListItem = styled.div`
  box-sizing: border-box;
  border: 2px solid #3E3E3E;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  margin: 0.5rem auto;
  gap: 10px;

  width: 100%;
  height: auto;

  background: linear-gradient(180deg, rgba(48, 48, 48, 0.2) 0%, rgba(48, 48, 48, 0.2) 100%);
  backdrop-filter: blur(250px);

  border-radius: 24px;
  @media(min-width: 620px) {
    padding: 1rem;
  }

`;

export const Question = styled.div`
display: flex;
justify-content: space-between;
margin-right: 8px;
align-items: center;
width: 100%;
height: auto;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 1.1rem;
line-height: 2;
color: #E0E0E0;

@media(min-width: 620px) {
  font-size: 1.25rem;
}

@media(min-width: 1290px) {
  font-size: 1.5rem;
}

`;


export const Answer = styled.div`
width: 100%;
height: auto;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 1.1rem;
line-height: 2;
color: #BDBDBD;

@media(min-width: 620px) {
  font-size: 1.25rem;
}

@media(min-width: 1290px) {
  font-size: 1.5rem;
}
`;


export const ArrowBox = styled.div`
  box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0.2rem;
gap: 10px;

width: 40px;
height: 40px;

background: linear-gradient(180deg, rgba(48, 48, 48, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%);
box-shadow: 0px 0px 25px #000000;
backdrop-filter: blur(250px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 96px;

`;

export const Arrow = styled.div`
 
font-size: 2.5rem;


`;