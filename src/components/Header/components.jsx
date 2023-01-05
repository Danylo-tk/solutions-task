import styled from "styled-components";

const Heading = styled.h1`
  font-size: 6.5rem;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;

  @media (max-width: 850px) {
    font-size: 4rem;
  }

  @media (max-width: 300px) {
    font-size: 3rem;
  }
`;

export { Heading };
