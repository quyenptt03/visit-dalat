import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-col laptop:flex-row 3xl:mx-32 laptop:mx-24`}
`;
const Col = styled.div`
  ${tw`w-full laptop:w-1/5`}
`;
const FoodImg = styled.img`
  ${tw`object-cover w-full h-full transition-all duration-300 ease-in-out`}
  ${({ isHovered }: { isHovered: boolean }) => isHovered && tw`-translate-y-10`}
`;
const CaptionContainer = styled.div`
  ${tw`absolute bottom-0 flex items-center justify-center invisible w-full h-16 px-5 transition-all duration-300 ease-in-out translate-y-20 laptop:px-0 3xl:h-20 bg-secondary`}
  ${({ isHovered }: { isHovered: boolean }) =>
    isHovered && tw`visible translate-y-0`}
`;
const Caption = styled.h4`
  ${tw`text-sm font-semibold 3xl:text-lg text-primary`}
`;
const FoodItem = styled.div`
  ${tw`relative w-full h-full px-5 mt-6 overflow-hidden cursor-pointer laptop:px-0 laptop:my-0 aspect-square `}
`;
const AboveImg = styled.div`
  ${tw`3xl:h-[494px] w-full laptop:h-[395px] h-auto`}
`;
const BelowImg = styled.div`
  ${tw`w-full laptop:mt-6 3xl:h-72  laptop:h-[230px] h-auto`}
`;
const Col2 = styled.div`
  ${tw`w-full laptop:w-3/5 3xl:ml-6 laptop:ml-5`}
`;
const TopRow = styled.div`
  ${tw`flex flex-col laptop:flex-row 3xl:h-[314px] w-full laptop:h-[251px] h-auto`}
`;
const SecondRow = styled.div`
  ${tw`flex flex-col laptop:flex-row 3xl:h-[467px] w-full laptop:mt-5 3xl:mt-6  laptop:h-[374px] h-auto `}
`;
const TopRowImg = styled.div`
  ${tw`w-full h-auto laptop:w-1/2 3xl:mr-6 laptop:mr-5`}
`;
const SecondRowImg1 = styled.div`
  ${tw`w-full h-auto laptop:w-1/3 3xl:mr-6 laptop:mr-5`}
`;
const SecondRowImg2 = styled.div`
  ${tw`w-full h-auto laptop:w-2/3 3xl:mr-6 laptop:mr-5`}
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
