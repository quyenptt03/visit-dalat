import styled from "styled-components";
import tw from "twin.macro";

export const ActivityContainer = styled.a`
  width: 21.875rem;
  height: 38.75rem;
  ${tw`block m-16 cursor-pointer`};
`;
export const ImageContainer = styled.div`
  ${tw`relative w-full h-full overflow-hidden rounded-lg`}
`;
export const Image = styled.img`
  ${tw`w-full h-full transition-all duration-300 ease-linear rounded-lg hover:transform hover:scale-105 `}
`;
export const Content = styled.div`
  ${tw`absolute ml-14 bottom-12`}
`;
export const Title = styled.h1`
  ${tw`mb-2 font-semibold text-[2rem] text-white capitalize`}
`;
export const SubTitle = styled.span`
  ${tw`text-base font-medium text-white opacity-70`}
`;
export const ButtonContainer = styled.div`
  ${tw`absolute bottom-0 right-0`}
`;
