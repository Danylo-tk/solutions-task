import styled from "styled-components";

const Paragraph = styled.p`
  max-width: 55rem;
  font-size: 1.8rem;

  @media (max-width: 850px) {
    max-width: 45rem;
    font-size: 1.4rem;
  }
`;

export { Paragraph };
