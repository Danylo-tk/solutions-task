import styled from "styled-components";

const SecondaryHeading = styled.h2`
  font-size: 5rem;
  font-family: "Anton", sans-serif;
  text-transform: uppercase;

  @media (max-width: 850px) {
    font-size: 3.2rem;
  }
`;

const YellowPart = styled.span`
  color: #ffbc00;
  font-size: 5rem;
  font-family: "Anton", sans-serif;
  text-transform: uppercase;

  @media (max-width: 850px) {
    font-size: 3.2rem;
  }
`;

export { SecondaryHeading, YellowPart };
