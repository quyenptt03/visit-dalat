import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`mx-3`}
`;

const Item = styled.div`
  ${tw`overflow-hidden rounded-full 3xl:mx-3 3xl:w-52 3xl:h-52 laptop:w-40 laptop:h-40 laptop:mx-0`}
`;

const Image = styled.img`
  ${tw`object-cover w-full h-full transition-all duration-300 ease-linear hover:transform hover:scale-105 rounded-full `}
`;
const Title = styled.h1`
  ${tw`mb-2 text-[20px] font-semibold text-white capitalize 3xl:text-3xl`}
`;

export { Container, Image, Title, Item };
