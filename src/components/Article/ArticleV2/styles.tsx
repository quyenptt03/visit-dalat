import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex h-20 mb-6 w-full`}
`;

const ImageContainer = styled.div`
  ${tw`relative h-full w-20 overflow-hidden rounded-sm cursor-pointer`}
`;

const Info = styled.div`
  ${tw`pl-4 w-[calc(100%-5rem)]`}
`;

const Image = styled.img`
  ${tw`object-cover w-full transition-all duration-300 ease-linear hover:transform hover:scale-105 h-full`}
`;

const Title = styled.div`
  ${tw`w-full mt-5 font-bold capitalize text-raven-black cursor-pointer text-sm h-8 mb-8 tablet:mt-0`}
`;

const Description = styled.div`
  ${tw`w-full 3xl:text-base font-medium  leading-7 text-gray laptop:text-sm`}
`;

export { Container, Image, Info, ImageContainer, Title, Description };
