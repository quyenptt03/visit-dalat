import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`relative w-full h-screen`}
`;
export const Image = styled.img`
  ${tw`w-full h-screen `}
`;
export const HomeContainer = styled.div`
  ${tw`relative !flex justify-center`}
`;
export const WrapTitle = styled.div`
  ${tw`absolute flex flex-col items-center top-1/3`}
`;
export const SubTitle = styled.h2`
  ${tw`
    text-xl
    text-white
    font-medium
    tracking-[0.55em]
    uppercase
    z-10
    xxl:text-3xl
  `}
`;

export const Title = styled.h1`
  ${tw`
    text-[135px]
    text-white
    font-bold
    leading-[12.5rem]
    capitalize
    z-10
    xxl:text-[200px]
  `}
`;

export const SeeMoreBtn = styled.a`
  ${tw`absolute flex items-center -rotate-90 cursor-pointer left-4 bottom-60 opacity-60 hover:opacity-100`}
`;
export const SeeMoreSpan = styled.span`
  ${tw`
    w-9 h-[2px]
    bg-white
    mr-6
  `}
`;
export const SeeMoreTitle = styled.span`
  ${tw`text-xs font-semibold tracking-widest text-white uppercase xxl:text-sm`}
`;

export const ArrowBtns = styled.div`
  ${tw`absolute flex right-7 bottom-12`}
`;
export const IconContainer = styled.button`
  ${tw`flex items-center justify-center w-12 h-12 ml-3 transition-all ease-linear disabled:opacity-40`}
`;
export const SlideNumberContainer = styled.div`
  ${tw`absolute right-[52px] bottom-44 flex items-end text-lg font-semibold text-white `}
`;
export const CurrentSlideNumber = styled.span`
  ${tw`text-3xl`}
`;
export const TotalSlideNumber = styled.span`
  ${tw`opacity-30`}
`;
export const Slash = styled.span`
  ${tw`ml-1 mr-2 opacity-30`}
`;
export const CustomDotsContainer = styled.div`
  ${tw`absolute  bottom-72 right-12`}
`;
export const DotsList = styled.ul`
  ${tw`flex flex-col m-0 `}
`;
export const CustomDot = styled.div`
  ${tw`
  w-[2px]
  h-20
  bg-white
  opacity-40
  `}
`;
export const FeaturedLocations = styled.div`
  ${tw`absolute flex bottom-8`}
`;
export const FeaturedLocationCard = styled.div`
  ${tw`relative flex items-center h-[108px] mx-3 text-white capitalize rounded-md  w-[416px]`}
`;
export const LocationIconContainer = styled.div`
  ${tw`mx-9`}
`;
export const LocationTitleWrapper = styled.div`
  ${tw`flex flex-col`}
`;
export const LocationTitle = styled.span`
  ${tw`text-xl font-bold `}
`;
export const LocationSeeMore = styled.a`
  ${tw`text-base font-normal cursor-pointer opacity-40 hover:opacity-100`}
`;
export const LocationCardBg = styled.div`
  ${tw`absolute w-full h-full blur-sm bg-white/10`}
`;
