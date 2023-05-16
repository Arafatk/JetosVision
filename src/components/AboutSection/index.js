// Images for icons and other sections

import timer from "./../../assests/work/first.svg";
import data from "./../../assests/work/data.svg";
import accuracy from "./../../assests/work/accuracy.svg";
import {
  AboutSectionMain,
  ItemHead,
  ItemIcon,
  ItemPara,
  ItemSecion,
} from "./index.styled";

const AboutSection = () => {
  return (
    <AboutSectionMain>
      <ItemSecion>
        <ItemIcon>
          <img src={timer} alt="animg" />
        </ItemIcon>
        <ItemHead>Save hours wasted</ItemHead>
        <ItemPara>
          Go through thousands of lines of fine print in a matter of minutes.
          Once Pagewhisperer processes your documents, get your questions
          answered in seconds.
        </ItemPara>
      </ItemSecion>

      <ItemSecion>
        <ItemIcon>
          <img src={data} alt="animg" />
        </ItemIcon>
        <ItemHead>Control your data</ItemHead>
        <ItemPara>
          Pagewhisperer uses secure data rooms that don’t save your information.
          View all logs of access and delete them when you’re done
        </ItemPara>
      </ItemSecion>

      <ItemSecion>
        <ItemIcon>
          <img src={accuracy} alt="animg" />
        </ItemIcon>
        <ItemHead>Accuracy you need</ItemHead>
        <ItemPara>
          Find the clause you’re looking for or a paraphrased version of it.
          Reference the exact locations in the source document.
        </ItemPara>
      </ItemSecion>
    </AboutSectionMain>
  );
};

export default AboutSection;
