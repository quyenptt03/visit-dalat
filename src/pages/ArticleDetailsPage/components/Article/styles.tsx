import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`grid grid-cols-12 my-24 mx-11`}
`;
const ArticleContainer = styled.div`
  ${tw`col-span-12 mt-10 laptop:col-span-8 laptop:col-start-3`}
`;
const ArticleHero = styled.div`
  ${tw`grid grid-cols-6 mb-12`}
`;
const Title = styled.h1`
  ${tw`col-span-6 text-3xl font-extrabold text-center text-black laptop:col-span-4 laptop:col-start-2 xxl:text-6xl`}
`;
const Action = styled.div`
  ${tw`col-span-6 my-5 text-center laptop:col-span-4 laptop:col-start-2`}
`;
const Buttons = styled.div`
  ${tw`flex justify-center`}
`;
const ButtonContent = styled.div`
  ${tw`flex items-center justify-center text-primary`}
`;
const IconText = styled.span`
  ${tw`mr-2 text-sm font-bold xxl:text-base`}
`;
const Icon = styled.div`
  svg path {
    ${tw`stroke-[1.5]`}
  }
`;
const Image = styled.img`
  ${tw`w-full max-h-[40rem] col-span-6 object-cover`}
`;
const ParagraphContainer = styled.div`
  ${tw`border-t-[1px] border-gray border-opacity-50 `}
`;
const Paragraph = styled.div`
  ${tw`pt-5 `}
`;
const ParagraphTitle = styled.h2`
  ${tw`mb-5 text-lg font-semibold`}
`;
const ParagraphContent = styled.p`
  ${tw`mb-8 text-base`}
`;

export {
  Container,
  ArticleContainer,
  ArticleHero,
  Title,
  Action,
  Buttons,
  ButtonContent,
  IconText,
  Icon,
  Image,
  ParagraphContainer,
  Paragraph,
  ParagraphTitle,
  ParagraphContent,
};
