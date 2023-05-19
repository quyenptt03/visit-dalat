import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarContainer2,
  NavarRightSide,
  Icon,
  SearchIconContainer,
} from "./styles";

import Logo from "../Logo";
import NavItems from "../Navbar/components/NavItems";
import { TextButton } from "../Button";

const Navbar = () => {
  return (
    <NavbarContainer2>
      <Logo theme="dark" />
      <NavItems />
      <NavarRightSide>
        <Icon>
          <SearchIconContainer />
        </Icon>
        <TextButton theme="blackOutlined">
          <NavLink to="/login">Đăng nhập</NavLink>
        </TextButton>
      </NavarRightSide>
    </NavbarContainer2>
  );
};

export default Navbar;
