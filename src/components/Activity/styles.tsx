import styled from "styled-components";
import tw from "twin.macro";

export const ActivityContainer = styled.a`
  ${tw`block cursor-pointer laptop:h-[31rem] laptop:w-[17.5rem] xxl:w-[21.875rem] xxl:h-[38.75rem]`};
`;
export const ImageContainer = styled.div`
  ${tw`relative w-full h-full overflow-hidden rounded-lg`}
`;
export const Image = styled.img`
  ${tw`w-full h-full transition-all duration-300 ease-linear rounded-lg hover:transform hover:scale-105 `}
`;
export const Content = styled.div`
  ${tw`absolute laptop:ml-11 laptop:bottom-9 xxl:ml-14 xxl:bottom-12`}
`;
export const Title = styled.h1`
  ${tw`mb-2 font-semibold text-white capitalize xxl:text-3xl laptop:text-2xl`}
`;
export const SubTitle = styled.span`
  ${tw`font-medium text-white xxl:text-base opacity-70 laptop:text-xs`}
`;
export const ButtonContainer = styled.div`
  ${tw`absolute bottom-0 right-0`}
`;
