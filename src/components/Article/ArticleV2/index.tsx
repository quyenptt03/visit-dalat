import tw from "twin.macro";
import styled from "styled-components";
import { IconButton } from "../../Button";

const Container = styled.div`
  ${tw`flex h-20 mb-6 w-full`}
`;

const ImageContainer = styled.div`
  ${tw`relative h-full w-20 overflow-hidden rounded-sm cursor-pointer`}
`;

const Info = styled.div`
  ${tw`pl-4 w-[calc(100%-5rem)]`}
`;

const Image = styled.img`
  ${tw`object-cover w-full transition-all duration-300 ease-linear hover:transform hover:scale-105 h-full`}
`;

const Title = styled.div`
  ${tw`w-full mt-5 font-bold capitalize text-raven-black cursor-pointer text-sm h-8 mb-8 tablet:mt-0`}
`;

const Description = styled.div`
  ${tw`w-full 3xl:text-base font-medium  leading-7 text-gray laptop:text-sm`}
`;

const ArticleV2 = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPXxA9X05Lmz7FoHQVnc3SlLt8-6cYU12tgkWygL8golrqMgNo"
          }
          alt="article image"
        />
      </ImageContainer>
      <Info>
        <Title>
          Thung lũng tình yêu Đà Lạt: Review kinh nghiệm, giá vé, lưu ý
        </Title>
      </Info>
    </Container>
  );
};

export default ArticleV2;
