import { useState } from "react";
import {
  Container,
  ImgWrapper,
  Link,
  MenuIconWrapper,
  NavBar,
  ExtendedNavBar,
  ExtendedLink,
  InnerContainer,
} from "./components";
import logo from "../../assets/logo-white.png";
import menuIcon from "../../assets/MenuIcon.png";
import crossIcon from "../../assets/CrossIcon.png";
import { PrimaryButton } from "../../styles/components/PrimaryButton/components";

const NavLinks = () => {
  const [extendedMenu, setExtendedMenu] = useState(false);

  return (
    <Container extendedMenu={extendedMenu}>
      <InnerContainer>
        <ImgWrapper>
          <img src={logo} alt="" />
        </ImgWrapper>
        <NavBar>
          <Link>home</Link>
          <Link>about us</Link>
          <Link>what we do</Link>
          <Link>
            <PrimaryButton variant="contained" btnheight={50} btnwidth={118}>
              contact us
            </PrimaryButton>
          </Link>
        </NavBar>
        <MenuIconWrapper
          onClick={() => {
            setExtendedMenu((currState) => !currState);
          }}
        >
          {extendedMenu ? (
            <img src={crossIcon} alt="close icon" />
          ) : (
            <img src={menuIcon} alt="menu icon" />
          )}
        </MenuIconWrapper>
      </InnerContainer>
      {extendedMenu && (
        <ExtendedNavBar>
          <ExtendedLink>home</ExtendedLink>
          <ExtendedLink>about us</ExtendedLink>
          <ExtendedLink>what we do</ExtendedLink>
          <ExtendedLink>our history</ExtendedLink>
          <ExtendedLink>contact us</ExtendedLink>
        </ExtendedNavBar>
      )}
    </Container>
  );
};

export default NavLinks;
