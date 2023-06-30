import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`relative w-full h-screen`}
`;
export const Image = styled.img`
  ${tw`object-cover w-full h-screen`}
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
    text-7xl
    tablet:text-[135px]
    text-white
    font-bold
    my-5
    capitalize
    z-10
    xxl:text-[200px]
  `}
`;

export const SeeMoreBtn = styled.a`
  ${tw`absolute items-center hidden -rotate-90 cursor-pointer laptop:flex xxl:left-4 xxl:bottom-60 laptop:bottom-48 laptop:left-3 opacity-60 hover:opacity-100`}
`;
export const SeeMoreSpan = styled.span`
  ${tw`
    xxl:w-9 h-[2px]
    bg-white
    xxl:mr-6
    laptop:mr-5
    laptop:w-7
  `}
`;
export const SeeMoreTitle = styled.span`
  ${tw`text-xs font-semibold tracking-widest text-white uppercase xxl:text-sm`}
`;

export const ArrowBtns = styled.div`
  ${tw`absolute hidden right-7 bottom-12 laptop:flex`}
`;
export const IconContainer = styled.button`
  ${tw`flex items-center justify-center w-12 h-12 ml-3 transition-all ease-linear disabled:opacity-40`}
`;
export const SlideNumberContainer = styled.div`
  ${tw`absolute right-[52px] xxl:bottom-44 laptop:bottom-36 laptop:flex items-end xxl:text-lg font-semibold text-white laptop:text-base hidden`}
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
  ${tw`absolute bottom-72 right-12`}
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
  ${tw`absolute hidden bottom-8 laptop:flex`}
`;
export const FeaturedLocationCard = styled.div`
  ${tw`relative flex items-center xxl:h-[108px] mx-3 text-white capitalize rounded-md  xxl:w-[416px] laptop:h-[86px] laptop:w-[332px]`}
`;
export const LocationIconContainer = styled.div`
  ${tw`xxl:mx-9 laptop:mx-7`}
`;
export const LocationTitleWrapper = styled.div`
  ${tw`flex flex-col`}
`;
export const LocationTitle = styled.span`
  ${tw`font-bold xxl:text-xl laptop:text-base`}
`;
export const LocationSeeMore = styled.a`
  ${tw`font-normal cursor-pointer xxl:text-base opacity-40 hover:opacity-100 laptop:text-xs`}
`;
export const LocationCardBg = styled.div`
  ${tw`absolute w-full h-full blur-sm bg-white/10`}
`;
