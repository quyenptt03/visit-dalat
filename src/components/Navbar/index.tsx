import React, { useEffect, useRef, useState } from "react";
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
  UserContainer,
  AvatarContainer,
  Avatar,
} from "./styles";

import Logo from "../Logo";
import NavItems from "../Navbar/components/NavItems";
import PopupMenu from "./components/PopupMenu";
import { TextButton } from "../Button";
import defaultAvt from "../../assets/images/avtImg.png";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as LanguageIcon } from "../../assets/icons/language-icon.svg";
import { useAppSelector } from "../../redux/hook";

const useOutsideClick = (handler: Function) => {
  let domNode = useRef<any>();
  useEffect(() => {
    let handleFunction = (event: Event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleFunction);

    return () => {
      document.removeEventListener("mousedown", handleFunction);
    };
  }, [domNode]);
  return domNode;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const loggedInUser = useAppSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.userId;

  const handleUserIconClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const nodeDom = useOutsideClick(() => {
    setIsUserMenuOpen(false);
  });

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
          {isLoggedIn ? (
            <UserContainer ref={nodeDom}>
              <AvatarContainer onClick={handleUserIconClick}>
                <Avatar src={defaultAvt} alt="avatar" />
              </AvatarContainer>
              {isUserMenuOpen && <PopupMenu />}
            </UserContainer>
          ) : (
            <TextButton theme="blackOutlined">
              <NavLink to="/login">Đăng nhập</NavLink>
            </TextButton>
          )}
        </NavarRightSide>
      </Nav>
    </NavbarContainer2>
  );
};

export default Navbar;
