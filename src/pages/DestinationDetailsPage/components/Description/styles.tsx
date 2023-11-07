import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`w-full h-full bg-bg-blue`}
`;

const Wrapper = styled.div`
  ${tw`laptop:ml-11 pt-10 laptop:pt-20 laptop:mr-[17%] mx-5`}
`;
const Buttons = styled.div`
  ${tw`flex justify-end`}
`;
const Button = styled.button`
  ${tw`mb-5`}
  span {
    ${tw`text-sm`}
  }
`;
const ButtonContent = styled.div`
  ${tw`flex items-center justify-center text-primary`}
`;
const IconText = styled.span`
  ${tw`mr-2 text-sm font-bold 3xl:text-base`}
`;
const Icon = styled.div`
  svg path {
    ${tw`stroke-[1.5]`}
  }
`;
const Title = styled.h1`
  ${tw`mb-6 text-4xl font-extrabold text-black laptop:text-5xl 3xl:text-6xl 3xl:mt-9 mt-7`}
`;
const Info = styled.div`
  ${tw`flex flex-col justify-center w-full mb-4 bg-white laptop:justify-normal laptop:items-center laptop:flex-row h-14`}
`;
const InfoItem = styled.div`
  ${tw`flex mt-1 ml-3 mr-10 laptop:my-0`}
`;
const Text = styled.span`
  ${tw`ml-4 text-sm font-medium text-black 3xl:text-base`}
`;
const Paragraph = styled.p`
  ${tw`mt-6 mb-8 text-sm font-normal leading-5 text-black 3xl:text-base`}
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
