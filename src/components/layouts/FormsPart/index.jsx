import SecondaryHeader from "../../SecondaryHeader";
import {
  Wrapper,
  FormsWindow,
  ImgWrapper,
  FormsHeaderWrapper,
  ArrowImg,
  FormsWindowWrapper,
} from "./components";
import arrowUp from "../../../assets/ArrowUp.png";
import Forms from "../../Forms";

const FormsPart = () => {
  return (
    <>
      <Wrapper>
        <FormsHeaderWrapper>
          <SecondaryHeader />
          <ImgWrapper>
            <ArrowImg src={arrowUp} alt="arrow up" />
          </ImgWrapper>
        </FormsHeaderWrapper>
      </Wrapper>
      <Wrapper>
        <FormsWindow>
          <Forms />
        </FormsWindow>
      </Wrapper>
    </>
  );
};

export default FormsPart;
