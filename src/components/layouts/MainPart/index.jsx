import {
  ArrowWrapper,
  BtnWrapper,
  Container,
  ContentWrapper,
  ImgPart,
  MainSection,
  TextPart,
} from "./components";
import { PrimaryButton } from "../../../styles/components/PrimaryButton/components";
import arrowDown from "../../../assets/ArrowDown.png";
import Description from "../../Description";
import Header from "../../Header";
import NavLinks from "../../NavLinks";

const MainPart = () => {
  return (
    <Container>
      <ContentWrapper>
        <NavLinks />
        <Header />
        <Description />
        <BtnWrapper>
          <PrimaryButton variant="contained" btnheight={65} btnwidth={176}>
            learn more
          </PrimaryButton>
        </BtnWrapper>
        <ArrowWrapper>
          <img src={arrowDown} alt="arrow down" />
        </ArrowWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default MainPart;
