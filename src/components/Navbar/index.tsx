import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarContainer2,
  NavarRightSide,
  Icon,
  SearchIconWrapper,
  Nav,
  LanguageContainer,
  LanguageLabel,
  Language,
  LanguageOptions,
} from "./styles";

import Logo from "../Logo";
import NavItems from "../Navbar/components/NavItems";
import { TextButton } from "../Button";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as LanguageIcon } from "../../assets/icons/language-icon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <NavbarContainer2>
      <Logo theme="dark" />
      <Icon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Icon>
      <Nav $open={isOpen}>
        <NavItems />
        <NavarRightSide>
          <LanguageContainer>
            <Language id="lang">
              <LanguageOptions>VI</LanguageOptions>
              <LanguageOptions>EN</LanguageOptions>
            </Language>
            <LanguageLabel htmlFor="lang">
              <LanguageIcon />
            </LanguageLabel>
          </LanguageContainer>
          <SearchIconWrapper onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {/* <SearchIconContainer /> */}
            {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
          </SearchIconWrapper>
          <TextButton theme="blackOutlined">
            <NavLink to="/login">Đăng nhập</NavLink>
          </TextButton>
        </NavarRightSide>
      </Nav>
    </NavbarContainer2>
  );
};

export default Navbar;
