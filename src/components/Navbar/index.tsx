import { FormEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ReactComponent as LanguageIcon } from "../../assets/icons/language-icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import { ReactComponent as SaveIcon } from "../../assets/icons/save-icon.svg";
import defaultAvt from "../../assets/images/avtImg.png";
import { useAppSelector } from "../../redux/hook";
import { TextButton } from "../Button";
import Logo from "../Logo";
import NavItems from "../Navbar/components/NavItems";
import PopupMenu from "./components/PopupMenu";
import {
  Avatar,
  AvatarContainer,
  Icon,
  Language,
  LanguageContainer,
  LanguageLabel,
  LanguageOptions,
  Nav,
  NavarRightSide,
  NavbarContainer2,
  UserContainer,
  WishListContainer,
} from "./styles";
// import i18n from "../../i18n/i18n";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domNode]);
  return domNode;
};

const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [lang, setLang] = useState("vi");
  const loggedInUser = useAppSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.userId;

  const handleUserIconClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const nodeDom = useOutsideClick(() => {
    setIsUserMenuOpen(false);
  });

  const handleChangeLanguage = (e: FormEvent) => {
    const eventTarget = e.target as HTMLInputElement;
    setLang(eventTarget.value);
    i18n.changeLanguage(eventTarget.value);
  };

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
            <Language id="lang" value={lang} onChange={handleChangeLanguage}>
              <LanguageOptions value="vi">VI</LanguageOptions>
              <LanguageOptions value="en">EN</LanguageOptions>
            </Language>
            <LanguageLabel htmlFor="lang">
              <LanguageIcon />
            </LanguageLabel>
          </LanguageContainer>
          <WishListContainer href="/wishlist">
            <SaveIcon />
          </WishListContainer>
          {isLoggedIn ? (
            <UserContainer ref={nodeDom}>
              <AvatarContainer onClick={handleUserIconClick}>
                <Avatar src={defaultAvt} alt="avatar" />
              </AvatarContainer>
              {isUserMenuOpen && <PopupMenu />}
            </UserContainer>
          ) : (
            <TextButton theme="blackOutlined">
              <NavLink to="/login">{t("login")}</NavLink>
            </TextButton>
          )}
        </NavarRightSide>
      </Nav>
    </NavbarContainer2>
  );
};

export default Navbar;
