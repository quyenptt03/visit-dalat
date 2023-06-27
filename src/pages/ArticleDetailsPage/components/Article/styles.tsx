import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`grid grid-cols-12 my-24 mx-11`}
`;
const ArticleContainer = styled.div`
  ${tw`col-span-8 col-start-3 mt-10`}
`;
const ArticleHero = styled.div`
  ${tw`grid grid-cols-6 mb-12`}
`;
const Title = styled.h1`
  ${tw`col-span-4 col-start-2 text-5xl xxl:text-6xl font-extrabold text-center text-black`}
`;
const Action = styled.div`
  ${tw`col-span-4 col-start-2 text-center my-5`}
`;
const Buttons = styled.div`
  ${tw``}
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
  ${tw` pt-5 `}
`;
const ParagraphTitle = styled.h2`
  ${tw`text-lg font-semibold mb-5`}
`;
const ParagraphContent = styled.p`
  ${tw`text-base mb-8`}
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
