import React from "react";
import { LogoContainer, Image, LightLogo, DarkLogo } from "./styles";
import logoIcon from "../../assets/images/logo-icon.svg";
interface ILogoTheme {
  theme: "light" | "dark";
}
const Logo = (props: ILogoTheme) => {
  const { theme } = props;
  return (
    <LogoContainer href="/">
      <Image>
        <img src={logoIcon} alt="logo" />
      </Image>
      {theme === "light" ? (
        <LightLogo>Visit Dalat</LightLogo>
      ) : (
        <DarkLogo>Visit Dalat</DarkLogo>
      )}
    </LogoContainer>
  );
};

export default Logo;
