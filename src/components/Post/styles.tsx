import styled from "styled-components";
import tw from "twin.macro";

interface ButtonProps {
  $size?: string;
}

export const PostContainer = styled.div`
  ${tw`block mb-10 w-96`}
`;
export const ImageContainer = styled.div`
  ${tw`relative w-full overflow-hidden rounded-t-lg rounded-br-lg cursor-pointer`}
`;
export const PostImage = styled.img`
  ${tw`object-cover w-full transition-all duration-300 ease-linear hover:transform hover:scale-105`}
  height: ${(props: ButtonProps) =>
    props.$size === "high"
      ? "30rem"
      : props.$size === "short"
      ? "15rem"
      : "24rem"}
`;
export const PostTitle = styled.div`
  ${tw`w-[calc(100%-3rem)] mt-5 mb-1 text-lg font-bold capitalize text-raven-black cursor-pointer `}
`;
export const PostDescription = styled.div`
  ${tw`w-[calc(100%-3rem)] text-base font-medium  leading-7 text-gray`}
`;
export const ButtonContainer = styled.div`
  ${tw`absolute bottom-0 right-0`}
`;
