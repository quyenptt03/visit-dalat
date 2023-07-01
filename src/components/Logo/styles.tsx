import styled from "styled-components";
import tw from "twin.macro";

export const LogoContainer = styled.a`
  ${tw`flex items-center mt-5 ml-5 laptop:m-0`}
`;
const LogoText = styled.div`
  ${tw`
    ml-4
    text-base
    tablet:text-lg
    tracking-[0.2em]
    uppercase
    font-black
    font-logo
    w-fit
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
    ${tw`w-auto h-12 xxl:h-full`}
  }
`;
