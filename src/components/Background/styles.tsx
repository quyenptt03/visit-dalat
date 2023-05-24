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
  ${tw`w-2/3 mt-6 font-medium text-center text-white xxl:text-lg laptop:text-sm`}
`;

export const Title = styled.h1`
  ${tw`
  xxl:text-[84px]
  laptop:text-7xl
    text-white
    font-black
    capitalize
  `}
`;
