import { useState } from "react";
import {
  MainHeader,
  LogoImage,
  MenuIcon,
  MenuLinks,
  MenuLink,
  DropdownMenu,
  Menu,
  LiveIcon,
} from "./index.styles";
import { OpenMenuSvg, CloseMenuSvg } from "../svgIcons/menuSvg";
import Logo from "../../images/pibLogo.png";
import { Link } from "react-router-dom";
import { ROTA } from "../../variables";

const Links = () => {
  return (
    <>
      <Link to={`${ROTA}`}>
        <MenuLink>Início</MenuLink>
      </Link>
      <Link to={`${ROTA}igreja`}>
        <MenuLink>Igreja</MenuLink>
      </Link>
      <Link to={`${ROTA}programacao`}>
        <MenuLink>Programação</MenuLink>
      </Link>
      <Link to={`${ROTA}eventos`}>
        <MenuLink>Eventos</MenuLink>
      </Link>
      <Link to={`${ROTA}ministerios`}>
        <MenuLink>Ministérios</MenuLink>
      </Link>
      <Link to={`${ROTA}pastores`}>
        <MenuLink>Pastores</MenuLink>
      </Link>
      <a
        href="https://www.youtube.com/c/PIBCROficial/live"
        target="_blank"
        rel="noreferrer"
      >
        <MenuLink>
          Assista &ensp;
          <LiveIcon height="20" width="20">
            <circle cx="10" cy="10" r="5" fill="red" />
          </LiveIcon>
        </MenuLink>
      </a>
    </>
  );
};

const HeaderContainer = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <MainHeader>
        <LogoImage src={Logo} />
        <MenuIcon onClick={() => handleMenu()}>
          {toggleMenu ? <CloseMenuSvg /> : <OpenMenuSvg />}
        </MenuIcon>
        <Menu>
          <Links />
        </Menu>
      </MainHeader>
      <DropdownMenu>
        {toggleMenu && (
          <MenuLinks>
            <Links />
          </MenuLinks>
        )}
      </DropdownMenu>
    </>
  );
};

export default HeaderContainer;
