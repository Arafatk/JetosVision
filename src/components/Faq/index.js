import {
  Answer,
  FaqMainContainer,
  ArrowBox,
  FaqHead,
  FaqList,
  FaqSection,
  ListItem,
  Question,
} from "./index.styled";

import ArrowUp from "./../../assests/icons/arrow_up.svg";
import ArrowDown from "./../../assests/icons/arrow_down.svg";
import { useState } from "react";
import { faqData } from "../../constants";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <FaqSection>
      <FaqHead>FAQ</FaqHead>
      <FaqMainContainer>
        <FaqList>
          {faqData &&
            faqData.map((faq, index) => {
              return (
                <ListItem key={index}>
                  <Question onClick={() => handleClick(index)}>
                    {faq.question}
                    {openIndex === index ? (
                      <ArrowBox>
                        <img src={ArrowUp} alt="arrow_up" />
                      </ArrowBox>
                    ) : (
                      <ArrowBox>
                        <img src={ArrowDown} alt="arrow_down" />
                      </ArrowBox>
                    )}
                  </Question>
                  <Answer>{openIndex !== index && <p>{faq.answer}</p>}</Answer>
                </ListItem>
              );
            })}
        </FaqList>
      </FaqMainContainer>
    </FaqSection>
  );
};

export default Faq;
