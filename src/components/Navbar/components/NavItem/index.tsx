import React, { useState } from "react";
import { Container, NavItemText, UnderLine } from "./styles";

interface INavItemProps {
  text: string;
  to: string;
}

const NavItem = (props: INavItemProps) => {
  const { to, text } = props;
  const [isHovered, setIsHover] = useState(false);

  return (
    <Container>
      <NavItemText
        to={to}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {text}
      </NavItemText>
      <UnderLine isHovered={isHovered} />
    </Container>
  );
};

export default NavItem;
