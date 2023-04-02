import React from "react";
import {
  NavbarContainer,
  NavarRightSide,
  Icon,
  SearchIconContainer,
} from "./styles";

import Logo from "../Logo";
import NavItems from "../Navbar/components/NavItems";
import { TextButton } from "../Button";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <NavItems />
      <NavarRightSide>
        <Icon>
          <SearchIconContainer />
        </Icon>
        <TextButton theme="blackOutlined">Đăng nhập</TextButton>
      </NavarRightSide>
    </NavbarContainer>
  );
};

export default Navbar;
