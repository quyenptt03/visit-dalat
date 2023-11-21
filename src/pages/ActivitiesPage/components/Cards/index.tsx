import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`flex justify-center`}
`;
const Wrapper = styled.div`
  ${tw`flex`}
`;
const CardContainer = styled.div`
  ${tw`relative 3xl:w-[424px] 3xl:h-64 2xl:w-[340px] 2xl:h-[204px] overflow-hidden rounded-lg mx-3`}
`;
const Image = styled.img`
  ${tw`object-cover w-full h-full transition-all duration-300 ease-linear rounded-lg hover:transform hover:scale-105 `}
`;
const Content = styled.div`
  ${tw`absolute ml-6 laptop:ml-11 laptop:bottom-9 3xl:ml-14 3xl:bottom-12 bottom-7`}
`;
const Title = styled.h1`
  ${tw`mb-2 text-[20px] font-semibold text-white capitalize 3xl:text-3xl`}
`;
const SubTitle = styled.span`
  ${tw`text-sm font-normal text-white laptop:text-base opacity-70 `}
`;

const Card = () => {
  return (
    <Container>
      <Wrapper>
        <CardContainer>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2020/08/10/20/43/waterfall-5478761_640.jpg"
            }
            alt="activity"
            loading="lazy"
          />
          <Content>
            <Title>Lorem ipsum dolor sit</Title>
            <SubTitle>Lorem ipsum dolor sit</SubTitle>
          </Content>
        </CardContainer>
        <CardContainer>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_640.jpg"
            }
            alt="activity"
            loading="lazy"
          />
          <Content>
            <Title>Lorem ipsum dolor sit</Title>
            <SubTitle>Lorem ipsum dolor sit</SubTitle>
          </Content>
        </CardContainer>
        <CardContainer>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2023/04/09/23/32/fish-7912504_640.jpg"
            }
            alt="activity"
            loading="lazy"
          />
          <Content>
            <Title>Lorem ipsum dolor sit</Title>
            <SubTitle>Lorem ipsum dolor sit</SubTitle>
          </Content>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Card;
