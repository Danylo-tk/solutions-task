import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
`;

const FormsHeaderWrapper = styled.div`
  width: 117rem;
  display: flex;
  justify-content: space-between;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowImg = styled.img`
  height: 5rem;

  @media (max-width: 850px) {
    height: 4rem;
  }
`;

const FormsWindow = styled.div`
  width: 117rem;
  height: 82rem;
  display: flex;
  justify-content: left;
  border-radius: 3rem;
  box-shadow: 0px 4px 20px 0px #00000014;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

const FormsWindowWrapper = styled.div``;

export {
  Wrapper,
  FormsHeaderWrapper,
  ImgWrapper,
  ArrowImg,
  FormsWindow,
  FormsWindowWrapper,
};
