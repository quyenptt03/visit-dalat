import React from "react";
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
        <TextButton theme="blackOutlined">Đăng nhập</TextButton>
      </NavarRightSide>
    </NavbarContainer2>
  );
};

export default Navbar;
