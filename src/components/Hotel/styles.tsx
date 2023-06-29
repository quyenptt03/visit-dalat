import styled from "styled-components";
import tw from "twin.macro";

// export const Container = styled.div`
//   ${tw`xxl:w-[506px] xxl:h-[323px] xxl:mb-20 laptop:w-[432px] laptop:h-72 laptop:mb-16 block w-96`}
// `;
export const Container = styled.div`
  ${tw`block w-full laptop:mb-16 xxl:h-[323px] laptop:h-72 h-56 px-5 laptop:pl-8`}
`;
export const ImageContainer = styled.div`
  ${tw`object-cover w-full h-full overflow-hidden rounded-lg cursor-pointer xxl:mb-5 laptop:mb-4`}
`;
export const Image = styled.img`
  ${tw`object-cover w-full h-full transition-all duration-300 ease-linear rounded-lg hover:transform hover:scale-105`}
`;
export const Title = styled.a`
  ${tw`block font-bold text-black cursor-pointer xxl:text-2xl laptop:text-xl`}
`;
