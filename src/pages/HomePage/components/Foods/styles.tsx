import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-col laptop:flex-row xxl:mx-32 laptop:mx-24`}
`;
const Col = styled.div`
  ${tw`w-full laptop:w-1/5`}
`;
const FoodImg = styled.img`
  ${tw`object-cover w-full h-full transition-all duration-300 ease-in-out`}
  ${({ isHovered }: { isHovered: boolean }) => isHovered && tw`-translate-y-10`}
`;
const CaptionContainer = styled.div`
  ${tw`absolute bottom-0 flex items-center justify-center invisible w-full h-16 px-5 transition-all duration-300 ease-in-out translate-y-20 laptop:px-0 xxl:h-20 bg-secondary`}
  ${({ isHovered }: { isHovered: boolean }) =>
    isHovered && tw`visible translate-y-0`}
`;
const Caption = styled.h4`
  ${tw`text-sm font-semibold xxl:text-lg text-primary`}
`;
const FoodItem = styled.div`
  ${tw`relative w-full h-full px-0 mt-6 overflow-hidden cursor-pointer laptop:px-0 laptop:my-0`}
`;
const AboveImg = styled.div`
  ${tw`xxl:h-[494px] w-full laptop:h-[395px] h-full`}
`;
const BelowImg = styled.div`
  ${tw`w-full laptop:mt-6 xxl:h-72  laptop:h-[230px] h-full`}
`;
const Col2 = styled.div`
  ${tw`w-full laptop:w-3/5 xxl:ml-6 laptop:ml-5`}
`;
const TopRow = styled.div`
  ${tw`flex flex-col laptop:flex-row xxl:h-[314px] w-full laptop:h-[251px] h-full`}
`;
const SecondRow = styled.div`
  ${tw`flex flex-col laptop:flex-row xxl:h-[467px] w-full laptop:mt-5 xxl:mt-6  laptop:h-[374px] h-full `}
`;
const TopRowImg = styled.div`
  ${tw`w-full h-full laptop:w-1/2 xxl:mr-6 laptop:mr-5`}
`;
const SecondRowImg1 = styled.div`
  ${tw`w-full h-full laptop:w-1/3 xxl:mr-6 laptop:mr-5`}
`;
const SecondRowImg2 = styled.div`
  ${tw`w-full h-full laptop:w-2/3 xxl:mr-6 laptop:mr-5`}
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
