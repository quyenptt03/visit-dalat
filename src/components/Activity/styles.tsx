import styled from "styled-components";
import tw from "twin.macro";

export const ActivityContainer = styled.a`
  ${tw`block cursor-pointer laptop:h-[31rem] w-full px-5  3xl:h-[38.75rem]`};
`;
export const ImageContainer = styled.div`
  ${tw`relative w-full h-full overflow-hidden rounded-lg`}
`;
export const Image = styled.img`
  ${tw`w-full h-full transition-all duration-300 ease-linear rounded-lg hover:transform hover:scale-105 object-cover`}
`;
export const Content = styled.div`
  ${tw`absolute ml-6 laptop:ml-11 laptop:bottom-9 3xl:ml-14 3xl:bottom-12 bottom-7`}
`;
export const Title = styled.h1`
  ${tw`mb-2 text-xl font-semibold text-white capitalize 3xl:text-3xl laptop:text-2xl`}
`;
export const SubTitle = styled.span`
  ${tw`text-sm font-medium text-white laptop:text-base opacity-70 `}
`;
export const ButtonContainer = styled.div`
  ${tw`absolute bottom-0 right-0`}
`;
