import styled from "styled-components";
import tw from "twin.macro";

export const Image = styled.img`
  ${tw`w-full h-screen `}
`;
export const Container = styled.div`
  ${tw`relative !flex justify-center `}
`;
export const WrapTitle = styled.div`
  ${tw`absolute flex flex-col items-center w-11/12 top-1/3`}
`;
export const SubTitle = styled.h2`
  ${tw`w-full mt-6 font-medium text-center text-white tablet:w-2/3 3xl:text-lg laptop:text-sm`}
`;

export const Title = styled.h1`
  ${tw`
  3xl:text-[84px]
  laptop:text-7xl
  tablet:text-5xl
text-white
  font-black
  capitalize
  text-3xl text-center
  `}
`;
