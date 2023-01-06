import {
  ArrowImgWrapper,
  ContentPart,
  DescriptionPart,
  HelmetImg,
  ImgPart,
  MainPartContainer,
  MainPartWrapper,
} from "./components";
import { PrimaryButton } from "../../../styles/components/PrimaryButton/components";
import arrowDown from "../../../assets/ArrowDown.png";
import helmet from "../../../assets/Helmet.png";
import NavLinks from "../../NavLinks";
import Header from "../../Header";
import Description from "../../Description";

const MainPart = () => {
  return (
    <MainPartContainer>
      <MainPartWrapper>
        <NavLinks />
        <ContentPart>
          <DescriptionPart>
            <Header />
            <Description />
            <div>
              <PrimaryButton variant="contained" btnheight={65} btnwidth={176}>
                learn more
              </PrimaryButton>
            </div>
            <ArrowImgWrapper>
              <img src={arrowDown} alt="arrow down" />
            </ArrowImgWrapper>
          </DescriptionPart>
          <ImgPart>
            <HelmetImg src={helmet} alt="helmet" />
          </ImgPart>
        </ContentPart>
      </MainPartWrapper>
    </MainPartContainer>
  );
};

export default MainPart;
