import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`mx-72 mb-5 mt-20`}
`;
const Title = styled.h2`
  ${tw`3xl:text-3xl 2xl:text-2xl text-xl font-bold text-center mb-6`}
`;
const FormContainer = styled.form`
  ${tw``}
`;
const InputField = styled.div`
  ${tw`mb-5`}
`;
const InputName = styled.h5`
  ${tw`font-semibold text-base mb-2`}
`;
const Textarea = styled.textarea`
  ${tw`border-[1px] border-black p-2 text-base text-black w-full`}
`;
const Input = styled.input`
  ${tw`border-[1px] h-10 w-full p-1`}
`;
const SubmitButton = styled.button`
  ${tw`transition-all duration-200 ease-linear px-8 py-4 border-transparent laptop:px-10 laptop:py-4 3xl:px-12 3xl:py-6 text-primary bg-primary text-base font-medium text-white hover:text-primary hover:bg-secondary`}
`;
const BoldSpan = styled.span`
  ${tw`font-bold`}
`;

export {
  Container,
  Title,
  FormContainer,
  Input,
  InputField,
  InputName,
  Textarea,
  SubmitButton,
  BoldSpan,
};
