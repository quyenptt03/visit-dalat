import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`relative grid w-full grid-cols-12 mt-20 h-80 xxl:mt-24 bg-bg-blue `}
`;
const Background = styled.img`
  ${tw`absolute h-full`}
`;
const Wrapper = styled.div`
  ${tw`z-10 flex justify-between col-span-8 col-start-3 mt-16 mx-6`}
`;
const Texts = styled.div`
  ${tw`w-1/2`}
`;
const Title = styled.h1`
  ${tw`text-3xl font-bold xxl:text-4xl mb-5`}
`;
const Desc = styled.p`
  ${tw`text-sm xxl:text-base`}
`;
const Buttons = styled.div`
  ${tw``}
`;
const ButtonContent = styled.div`
  ${tw`flex items-center justify-center text-green`}
`;
const IconText = styled.span`
  ${tw`mr-2 text-sm font-bold xxl:text-base`}
`;
const Icon = styled.div`
  svg path {
    ${tw`stroke-[1.5]`}
  }
`;

export {
  Container,
  Background,
  Wrapper,
  Texts,
  Title,
  Desc,
  Buttons,
  ButtonContent,
  IconText,
  Icon,
};
