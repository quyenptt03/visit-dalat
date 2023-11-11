import tw from "twin.macro";
import styled from "styled-components";
import { IconButton } from "../../Button";

const Container = styled.div`
  ${tw`flex h-72 mb-14 justify-between`}
`;

const ImageContainer = styled.div`
  ${tw`relative w-1/2 overflow-hidden rounded-t-lg rounded-br-lg cursor-pointer mx-4`}
  order: ${(props: { swap: boolean }) => (props.swap === true ? 1 : 0)}
`;

const Info = styled.div`
  ${tw`w-1/2 mx-4`}
`;

const Image = styled.img`
  ${tw`object-cover w-full transition-all duration-300 ease-linear hover:transform hover:scale-105 h-full`}
`;

const Title = styled.div`
  ${tw`w-full mt-5 font-bold capitalize text-raven-black cursor-pointer text-base 2xl:text-lg h-8 mb-8 tablet:mt-0`}
`;

const Description = styled.div`
  ${tw`w-full 3xl:text-base font-medium  leading-7 text-gray laptop:text-sm`}
`;

const ButtonContainer = styled.div`
  ${tw`absolute bottom-0 right-0`}
`;
interface IArticle {
  swap?: Boolean;
}

const ArticleV1 = (props: IArticle) => {
  const { swap } = props;
  return (
    <Container>
      <ImageContainer swap={swap}>
        <Image
          src={
            "https://cdn.alongwalk.info/info/wp-content/uploads/2022/04/08173524/image-du-lich-da-lat-1-ngay-nen-di-dau-xem-ngay-lich-trinh-hay-164938892497772.jpg"
          }
          alt="article image"
        />
        <ButtonContainer>
          <IconButton type="saveBtn" />
        </ButtonContainer>
      </ImageContainer>
      <Info>
        <Title>
          Langbiang Đà Lạt đỉnh núi này có gì mà làm mọi người mê mẩn
        </Title>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of{" "}
        </Description>
      </Info>
    </Container>
  );
};

export default ArticleV1;
