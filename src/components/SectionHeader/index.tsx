import React from "react";
import { Container, Field, Title } from "./styles";
interface ISectionHeaderProps {
  field: string;
  title: string;
}

const SectionHeader = (props: ISectionHeaderProps) => {
  const { field, title } = props;
  return (
    <Container>
      <Field>{field}</Field>
      <Title>{title}</Title>
    </Container>
  );
};

export default SectionHeader;
