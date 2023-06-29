import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex xxl:mx-32 laptop:mx-24`}
`;
const Col = styled.div`
  ${tw`w-1/5 `}
`;
const FoodImg = styled.img`
  ${tw`object-cover w-full h-full transition-all duration-300 ease-in-out`}
  ${({ isHovered }: { isHovered: boolean }) => isHovered && tw`-translate-y-10`}
`;
const CaptionContainer = styled.div`
  ${tw`absolute bottom-0 flex items-center justify-center invisible w-full transition-all duration-300 ease-in-out translate-y-20 xxl:h-20 laptop:h-16 bg-secondary`}
  ${({ isHovered }: { isHovered: boolean }) =>
    isHovered && tw`visible translate-y-0`}
`;
const Caption = styled.h4`
  ${tw`font-semibold xxl:text-lg text-primary laptop:text-sm`}
`;
const FoodItem = styled.div`
  ${tw`relative w-full h-full overflow-hidden cursor-pointer`}
`;
const AboveImg = styled.div`
  ${tw`xxl:h-[494px] w-full laptop:h-[395px]`}
`;
const BelowImg = styled.div`
  ${tw`w-full mt-6 xxl:h-72 laptop:mt-5 laptop:h-[230px]`}
`;
const Col2 = styled.div`
  ${tw`w-3/5 xxl:ml-6 laptop:ml-5`}
`;
const TopRow = styled.div`
  ${tw`flex xxl:h-[314px] w-full laptop:h-[251px]`}
`;
const SecondRow = styled.div`
  ${tw`flex xxl:h-[467px] w-full  xxl:mt-6 laptop:h-[374px]  laptop:mt-5`}
`;
const TopRowImg = styled.div`
  ${tw`w-1/2 h-full xxl:mr-6 laptop:mr-5`}
`;
const SecondRowImg1 = styled.div`
  ${tw`w-1/3 h-full xxl:mr-6 laptop:mr-5`}
`;
const SecondRowImg2 = styled.div`
  ${tw`w-2/3 h-full xxl:mr-6 laptop:mr-5`}
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
