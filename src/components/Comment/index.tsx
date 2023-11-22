import {
  Container,
  CommentItem,
  LeftSide,
  Item,
  Image,
  Content,
  Name,
  Comment,
  Time,
  Button,
  AnsContainer,
} from "./styles";

interface CommentProps {
  imgAccount: string;
  name: string;
  time: string;
  content: string;
  AnsimgAcount?: string;
  Ansname?: string;
  Anstime?: string;
  AnscontComment?: string;
}

const CommentSection = (props: CommentProps) => {
  const {
    imgAccount,
    name,
    time,
    content,
    Ansname,
    AnsimgAcount,
    Anstime,
    AnscontComment,
  } = props;
  return (
    <Container>
      <CommentItem>
        <LeftSide>
          <Item>
            <Image src={imgAccount} alt="User Avatar" />
          </Item>
          <Content>
            <Name>{name}</Name>
            <Time>{time}</Time>
            <Comment>{content}</Comment>
          </Content>
        </LeftSide>

        <Button>Trả lời</Button>
      </CommentItem>

      {Ansname && (
        <AnsContainer>
          <CommentItem>
            <LeftSide>
              <Item>
                <Image src={AnsimgAcount} alt="User Avatar" />
              </Item>
              <Content>
                <Name>{Ansname}</Name>
                <Time>{Anstime}</Time>
                <Comment>{AnscontComment}</Comment>
              </Content>
            </LeftSide>
            <Button>Trả lời</Button>
          </CommentItem>
        </AnsContainer>
      )}
    </Container>
  );
};

export default CommentSection;
