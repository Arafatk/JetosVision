import styled from "styled-components";


export const AboutSectionMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: 2rem auto;
  height: auto;

  @media(min-width: 1290px) {
  width: 80%;
  margin: 1rem auto;
}
`;

export const ItemSecion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: auto;
  margin: 1rem auto;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  color: white;
`;

export const ItemIcon = styled.div`
  width: 5rem;
  height: 5rem;

  ${'' /* background: linear-gradient(180deg, rgba(94, 96, 218, 0.5) 0%, rgba(117, 119, 255, 0) 100%); */}

  flex: none;
  order: 0;
  flex-grow: 0;

  img {
    height: 100%;
    width: 100%;
  }

  @media(min-width: 1290px) {
    height: 7rem;
    width: 7rem;
  }

`;

export const ItemHead = styled.div` 
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 116px;
  line-height: 1;
  leading-trim: both;
  text-edge: cap;
  margin: 1rem 0rem;
  text-align: justify;

  color: rgba(255, 255, 255, 0.95);

  
`;

export const ItemPara =styled.div`
  
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 1.4rem;
line-height: 1.25;
margin: 1rem 0rem;
color: #BDBDBD;

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

@media(min-width: 1290px) {
    font-size: 1.75rem;
  }
`;

