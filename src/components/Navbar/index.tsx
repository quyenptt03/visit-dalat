import React from "react";
import {
  NavbarContainer,
  NavarRightSide,
  Icon,
  SearchIconContainer,
} from "./styles";

import Logo from "../Logo";
import NavItems from "../Navbar/components/NavItems";
import Button from "../Button";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <NavItems />
      <NavarRightSide>
        <Icon>
          <SearchIconContainer />
        </Icon>
        <Button theme="blackOutlined">Đăng nhập</Button>
      </NavarRightSide>
    </NavbarContainer>
  );
};

export default Navbar;
