import styled from "styled-components";
import tw from "twin.macro";

export const LogoContainer = styled.a`
  ${tw`flex items-center `}
`;
const LogoText = styled.div`
  ${tw`
    ml-4
    xxl:text-lg
    laptop:text-sm
    xxl:tracking-[0.2em]
    laptop:tracking-widest
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
    ${tw`w-auto h-full laptop:h-11 xxl:h-full`}
  }
`;
