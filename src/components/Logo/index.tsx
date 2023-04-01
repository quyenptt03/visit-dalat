import React from "react";
import { LogoContainer, Image, LogoText } from "./styles";
import logoIcon from "../../assets/images/logo-icon.svg";

const Logo = () => {
  return (
    <LogoContainer href="/">
      <Image>
        <img src={logoIcon} alt="logo" />
      </Image>
      <LogoText>Visit Dalat</LogoText>
    </LogoContainer>
  );
};

export default Logo;
