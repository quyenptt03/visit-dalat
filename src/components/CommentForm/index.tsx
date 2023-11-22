import {
  Container,
  Title,
  FormContainer,
  Input,
  InputField,
  InputName,
  Textarea,
  SubmitButton,
  BoldSpan,
} from "./styles";
const FormComment = () => {
  return (
    <Container>
      <Title>Để lại bình luận của bạn</Title>
      <FormContainer>
        <InputField>
          <InputName>Comment</InputName>
          <Textarea rows={8} cols={100} />
        </InputField>
        <InputField>
          <InputName>
            Name <BoldSpan>*</BoldSpan>
          </InputName>
          <Input type="text" id="name" name="name" />
        </InputField>
        <InputField>
          <InputName>
            Email <BoldSpan>*</BoldSpan>
          </InputName>
          <Input type="email" id="email" name="email" />
        </InputField>
        <InputField>
          <InputName>Website</InputName>
          <Input type="text" id="website" name="website" />
        </InputField>
        <SubmitButton>Post comment</SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default FormComment;
