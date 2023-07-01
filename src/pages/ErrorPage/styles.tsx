import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as ForwardIcon } from "../../assets/icons/forward-icon.svg";

const Container = styled.div`
  ${tw`h-[70vh] laptop:h-[90vh] mt-24 flex justify-center items-center gap-20 laptop:gap-40 laptop:flex-row flex-col-reverse`}
`;
const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center gap-7`}
`;
const Title = styled.h1`
  ${tw`text-5xl font-extrabold xxl:text-8xl text-primary laptop:text-6xl `}
`;
const SubTitle = styled.h2`
  ${tw`text-xl font-bold text-black laptop:text-3xl`}
`;
const ButtonContent = styled.div`
  ${tw`flex items-center justify-center`}
`;
const ButtonText = styled.span`
  ${tw`mr-5 text-base font-bold xxl:text-xl`}
`;
const ForwardIconContainer = styled(ForwardIcon)`
  ${tw` stroke-primary`}
`;
const ErrorImage = styled.img`
  ${tw`h-1/3 laptop:h-2/3`}
`;

export {
  Container,
  Wrapper,
  Title,
  SubTitle,
  ButtonContent,
  ButtonText,
  ForwardIconContainer,
  ErrorImage,
};
