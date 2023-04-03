import styled from "styled-components";
import tw from "twin.macro";

export const PostContainer = styled.a`
  ${tw`block w-96`}
`;
export const ImageContainer = styled.div`
  ${tw`relative w-full overflow-hidden rounded-t-lg rounded-br-lg cursor-pointer`}
`;
export const BasePostImage = styled.img`
  ${tw`w-full transition-all duration-300 ease-linear h-96 hover:transform hover:scale-105 `}
`;
export const ShortPostImage = styled(BasePostImage)`
  ${tw`h-60`}
`;
export const HighPostImage = styled(BasePostImage)`
  ${tw``}
  height: 30rem;
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
