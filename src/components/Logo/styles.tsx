import styled from "styled-components";
import tw from "twin.macro";

export const LogoContainer = styled.a`
  ${tw`flex items-center `}
`;
const LogoText = styled.div`
  ${tw`
    ml-4
    text-lg
    tracking-[0.2em]
    uppercase
    font-black
    font-logo
  `}
`;
export const LightLogo = styled(LogoText)`
  ${tw`text-white`}
`;
export const DarkLogo = styled(LogoText)`
  ${tw`text-black`}
`;
export const Image = styled.div`
  img {
    width: auto;
    height: 100%;
  }
`;
