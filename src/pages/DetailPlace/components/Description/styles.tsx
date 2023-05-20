import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`w-full h-full bg-bg-blue`}
`;

const Wrapper = styled.div`
  ${tw`ml-11 pt-20 mr-[340px]`}
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
  ${tw`flex items-center justify-center text-green`}
`;
const IconText = styled.span`
  ${tw`mr-2 text-base font-bold`}
`;
const Icon = styled.div`
  svg path {
    ${tw`stroke-[1.5]`}
  }
`;
const Title = styled.h1`
  ${tw`mb-6 text-6xl font-extrabold text-black mt-9`}
`;
const Info = styled.div`
  ${tw`flex items-center w-full mb-4 bg-white h-14`}
`;
const InfoItem = styled.div`
  ${tw`flex ml-3 mr-10 `}
`;
const Text = styled.span`
  ${tw`ml-4 text-base font-medium text-black`}
`;
const Paragraph = styled.p`
  ${tw`mt-6 mb-8 text-base font-normal leading-5 text-black`}
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
