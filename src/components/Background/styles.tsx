import styled from "styled-components";
import tw from "twin.macro";

export const Image = styled.img`
  ${tw`w-full h-screen `}
`;
export const Container = styled.div`
  ${tw`relative !flex justify-center`}
`;
export const WrapTitle = styled.div`
  ${tw`absolute flex flex-col items-center top-1/3`}
`;
export const SubTitle = styled.h2`
  ${tw`w-2/3 text-lg font-medium text-center text-white`}
`;

export const Title = styled.h1`
  ${tw`
  text-[84px]
    text-white
    font-black
    capitalize
  `}
`;
