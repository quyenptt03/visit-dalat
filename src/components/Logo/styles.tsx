import styled from "styled-components";
import tw from "twin.macro";

export const LogoContainer = styled.a`
  ${tw`flex items-center `}
`;
export const LogoText = styled.div`
  ${tw`
    ml-4
    text-lg
    text-white
    tracking-[0.2em]
    uppercase
    font-black
    font-logo
  `}
`;
export const Image = styled.div`
  img {
    width: auto;
    height: 100%;
  }
`;
