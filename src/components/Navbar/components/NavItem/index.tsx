import React, { useState } from "react";
import { Container, NavItemText, UnderLine } from "./styles";

interface INavItemProps {
  text: string;
  href: string;
}

const NavItem = (props: INavItemProps) => {
  const { href, text } = props;
  const [isHovered, setIsHover] = useState(false);

  return (
    <Container>
      <NavItemText
        href={href}
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
