import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`text-black tablet:mt-28 mt-10 2xl:mt-16 pt-4 tablet:pb-6 mx-4 tablet:px-9 w-full tablet:w-fit pb-3 px-4 border-[1px] border-[#878787] shadow-md rounded-lg mb-10`}
`;
const Greeting = styled.h2`
  ${tw`text-2xl font-light `}
`;
const Heading = styled.div`
  ${tw`mt-2 mb-4 laptop:mt-4 laptop:mb-6`}
`;
const Title = styled.h1`
  ${tw`text-3xl font-semibold`}
`;
const SubTitle = styled.h4`
  ${tw`text-sm font-normal`}
`;
const Form = styled.form`
  ${tw`w-full mb-5 tablet:w-96 2xl:w-[22.5rem]`}
`;
const SubmitButton = styled.button`
  ${tw`w-full font-medium text-center text-white rounded-lg h-14 bg-primary`}
`;
const Span = styled.span`
  ${tw`text-sm text-dark-gray`}
`;
const AuthLink = styled.a`
  ${tw`font-semibold text-black `}
`;

export {
  AuthLink,
  Container,
  Form,
  Greeting,
  Heading,
  Span,
  SubTitle,
  SubmitButton,
  Title,
};
