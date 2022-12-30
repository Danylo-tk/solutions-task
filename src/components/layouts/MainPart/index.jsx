import {
  Container,
  ContentWrapper,
  ImgPart,
  MainSection,
  TextPart,
} from "./components";
import Description from "../../Description";
import Header from "../../Header";
import NavLinks from "../../NavLinks";

const MainPart = () => {
  return (
    <Container>
      <ContentWrapper>
        <NavLinks />
      </ContentWrapper>
    </Container>
  );
};

export default MainPart;
