import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex mx-32`}
`;
const Col = styled.div`
  ${tw`w-1/5 `}
`;
const FoodImg = styled.img`
  ${tw`object-cover w-full h-full transition-all duration-300 ease-in-out`}
  ${({ isHovered }: { isHovered: boolean }) => isHovered && tw`-translate-y-10`}
`;
const CaptionContainer = styled.div`
  ${tw`absolute bottom-0 flex items-center justify-center invisible w-full h-20 transition-all duration-300 ease-in-out translate-y-20 bg-light-blue`}
  ${({ isHovered }: { isHovered: boolean }) =>
    isHovered && tw`visible translate-y-0`}
`;
const Caption = styled.h4`
  ${tw`text-lg font-semibold text-green `}
`;
const FoodItem = styled.div`
  ${tw`relative w-full h-full overflow-hidden cursor-pointer`}
`;
const AboveImg = styled.div`
  ${tw`h-[494px] w-full`}
`;
const BelowImg = styled.div`
  ${tw`w-full mt-6 h-72`}
`;
const Col2 = styled.div`
  ${tw`w-3/5 ml-6`}
`;
const TopRow = styled.div`
  ${tw`flex h-[314px] w-full`}
`;
const SecondRow = styled.div`
  ${tw`flex h-[467px] w-full  mt-6`}
`;
const TopRowImg = styled.div`
  ${tw`w-1/2 h-full mr-6`}
`;
const SecondRowImg1 = styled.div`
  ${tw`w-1/3 h-full mr-6`}
`;
const SecondRowImg2 = styled.div`
  ${tw`w-2/3 h-full mr-6`}
`;
export {
  Container,
  CaptionContainer,
  Caption,
  FoodItem,
  Col,
  FoodImg,
  AboveImg,
  BelowImg,
  Col2,
  TopRow,
  SecondRow,
  TopRowImg,
  SecondRowImg1,
  SecondRowImg2,
};
