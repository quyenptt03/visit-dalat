import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`flex h-72 mb-14 justify-between`}
`;

const ImageContainer = styled.div`
  ${tw`relative w-1/2 overflow-hidden rounded-t-lg rounded-br-lg cursor-pointer mx-4`}
  order: ${(props: { swap: boolean }) => (props.swap === true ? 1 : 0)}
`;

const Info = styled.div`
  ${tw`w-1/2 mx-4`}
`;

const Image = styled.img`
  ${tw`object-cover w-full transition-all duration-300 ease-linear hover:transform hover:scale-105 h-full`}
`;

const Title = styled.div`
  ${tw`w-full mt-5 font-bold capitalize text-raven-black cursor-pointer text-base 2xl:text-lg h-8 tablet:mt-0`}
`;

const Description = styled.div`
  ${tw`w-full 3xl:text-base font-medium  leading-7 text-gray laptop:text-sm mt-4`}
`;

const ButtonContainer = styled.div`
  ${tw`absolute bottom-0 right-0`}
`;

export {
  Container,
  Image,
  ImageContainer,
  Info,
  Title,
  Description,
  ButtonContainer,
};
