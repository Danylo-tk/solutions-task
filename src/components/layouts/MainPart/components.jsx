import styled from "styled-components";

const MainPartContainer = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #ffbc00;
`;

const MainPartWrapper = styled.div`
  width: 90%;
`;

const ContentPart = styled.div`
  height: 85vh;
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const DescriptionPart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  row-gap: 6rem;

  @media (max-width: 850px) {
    height: 50%;
    width: 100%;
    row-gap: 2rem;
  }
`;

const ImgPart = styled.div`
  width: 50%;

  @media (max-width: 850px) {
    height: 50%;
    width: 100%;
  }
`;

const HelmetImg = styled.img`
  @media (max-width: 850px) {
    height: 100%;
  }
`;

const ArrowImgWrapper = styled.div`
  @media (max-width: 850px) {
    display: none;
  }
`;

export {
  MainPartContainer,
  MainPartWrapper,
  ContentPart,
  DescriptionPart,
  ImgPart,
  ArrowImgWrapper,
  HelmetImg,
};
