import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`w-full h-full bg-bg-blue`}
`;

const Wrapper = styled.div`
  ${tw`ml-11 pt-20 mr-[17%]`}
`;
const Buttons = styled.div`
  ${tw`flex justify-end`}
`;
const Button = styled.button`
  span {
    ${tw`text-sm`}
  }
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
const Title = styled.h1`
  ${tw`mb-6 text-5xl font-extrabold text-black xxl:text-6xl xxl:mt-9 mt-7`}
`;
const Info = styled.div`
  ${tw`flex items-center w-full mb-4 bg-white h-14`}
`;
const InfoItem = styled.div`
  ${tw`flex ml-3 mr-10 `}
`;
const Text = styled.span`
  ${tw`ml-4 text-sm font-medium text-black xxl:text-base`}
`;
const Paragraph = styled.p`
  ${tw`mt-6 mb-8 text-sm font-normal leading-5 text-black xxl:text-base`}
`;

export {
  Container,
  Wrapper,
  Buttons,
  Button,
  ButtonContent,
  IconText,
  Icon,
  Title,
  Info,
  InfoItem,
  Text,
  Paragraph,
};
