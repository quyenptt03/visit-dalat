import React from "react";
import NavItem from "../NavItem";
import { ListContainer } from "./styles";

const NavItems = () => {
  return (
    <ListContainer>
      <NavItem href="/" text="Địa điểm" />
      <NavItem href="/" text="Hoạt động" />
      <NavItem href="/" text="Ẩm thực" />
      <NavItem href="/" text="Bài viết" />
    </ListContainer>
  );
};

export default NavItems;
