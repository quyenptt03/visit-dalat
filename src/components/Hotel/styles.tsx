import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`w-[506px] h-[323px] mb-20`}
`;
export const ImageContainer = styled.div`
  ${tw`w-full h-full mb-5 overflow-hidden rounded-lg cursor-pointer`}
`;
export const Image = styled.img`
  ${tw`object-cover w-full h-full transition-all duration-300 ease-linear rounded-lg hover:transform hover:scale-105`}
`;
export const Title = styled.a`
  ${tw`text-2xl font-bold text-black cursor-pointer`}
`;
