import React from "react";
import NavItem from "../NavItem";
import { ListContainer } from "./styles";

const NavItems = () => {
  return (
    <ListContainer>
      <NavItem to="/" text="Trang chủ" />
      <NavItem to="/destinations" text="Điểm đến" />
      {/* <NavItem to="/" text="Hoạt động" />
      <NavItem to="/" text="Ẩm thực" /> */}
      <NavItem to="/articles" text="Bài viết" />
    </ListContainer>
  );
};

export default NavItems;
