import styled from "styled-components";

const Container = styled.div`
  height: ${(props) => (props.extendedMenu ? "100vh" : "15vh")};
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
  margin: 4.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
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
