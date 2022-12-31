import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #ffbc00;
`;

const ContentWrapper = styled.div`
  max-width: 120rem;
  width: 90%;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const BtnWrapper = styled.div`
  margin: 3rem 5rem;
`;

const ArrowWrapper = styled.div`
  margin: 3rem 5rem;
`;

const TextPart = styled.div``;

const ImgPart = styled.div``;

export {
  Container,
  ContentWrapper,
  MainSection,
  TextPart,
  ImgPart,
  BtnWrapper,
  ArrowWrapper,
};
