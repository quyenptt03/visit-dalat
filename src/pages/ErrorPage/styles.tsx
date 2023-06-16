import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as ForwardIcon } from "../../assets/icons/forward-icon.svg";

const Container = styled.div`
  ${tw`h-[90vh] mt-24 flex justify-center items-center gap-40`}
`;
const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center gap-7`}
`;
const Title = styled.h1`
  ${tw`font-extrabold text-8xl text-green`}
`;
const SubTitle = styled.h2`
  ${tw`text-3xl font-bold text-black`}
`;
const ButtonContent = styled.div`
  ${tw`flex items-center justify-center`}
`;
const ButtonText = styled.span`
  ${tw`mr-5 text-base font-bold xxl:text-xl`}
`;
const ForwardIconContainer = styled(ForwardIcon)`
  ${tw` stroke-green`}
`;
const ErrorImage = styled.img`
  ${tw`h-2/3`}
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
