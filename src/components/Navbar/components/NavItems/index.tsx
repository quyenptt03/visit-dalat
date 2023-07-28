import React from "react";
import NavItem from "../NavItem";
import { ListContainer } from "./styles";
import { useTranslation } from "react-i18next";

const NavItems = () => {
  const { t } = useTranslation("nav");
  return (
    <ListContainer>
      <NavItem to="/" text={t("home")} />
      <NavItem to="/destinations" text={t("destinations")} />
      {/* <NavItem to="/" text="Hoạt động" />
      <NavItem to="/" text="Ẩm thực" /> */}
      <NavItem to="/articles" text={t("articles")} />
    </ListContainer>
  );
};

export default NavItems;
