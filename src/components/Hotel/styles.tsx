import styled from "styled-components";
import tw from "twin.macro";

// export const Container = styled.div`
//   ${tw`3xl:w-[506px] 3xl:h-[323px] 3xl:mb-20 laptop:w-[432px] laptop:h-72 laptop:mb-16 block w-96`}
// `;
export const Container = styled.div`
  ${tw`block w-full laptop:mb-16 3xl:h-[323px] laptop:h-72 2xl:h-64 h-56 px-5 laptop:pl-8 2xl:px-3 2xl:pr-5 3xl:px-5`}
`;
export const ImageContainer = styled.div`
  ${tw`object-cover w-full h-full overflow-hidden rounded-lg cursor-pointer 3xl:mb-5 laptop:mb-4 relative`}
`;
export const Image = styled.img`
  ${tw`object-cover w-full h-full transition-all duration-300 ease-linear rounded-lg hover:transform hover:scale-105`}
`;
export const Title = styled.a`
  ${tw`3xl:w-[calc(100%-3rem)] w-[calc(100%-2.75rem)] block font-bold text-black cursor-pointer 3xl:text-2xl laptop:text-xl`}
`;
export const ButtonContainer = styled.div`
  ${tw`absolute bottom-0 right-0`}
`;
