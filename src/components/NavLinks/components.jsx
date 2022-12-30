import styled from "styled-components";

const Container = styled.div`
  height: ${(props) => (props.extendedMenu ? "100vh" : "auto")};
  margin: 0 5rem;

  @media (max-width: 850px) {
    margin: 0 3rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImgWrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  align-items: center;
`;

const MenuIconWrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  align-items: center;

  @media (min-width: 850px) {
    display: none;
  }
`;

const NavBar = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 850px) {
    display: none;
  }
`;

const Link = styled.li`
  display: flex;
  align-items: center;
  margin: 5rem;
  font-size: 1.8rem;
  text-transform: capitalize;
`;

const ExtendedNavBar = styled.ul`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const ExtendedLink = styled.li`
  margin: 1.6rem;
  font-size: 2.4rem;
  text-transform: uppercase;
`;

export {
  Container,
  InnerContainer,
  ImgWrapper,
  MenuIconWrapper,
  NavBar,
  Link,
  ExtendedNavBar,
  ExtendedLink,
};
