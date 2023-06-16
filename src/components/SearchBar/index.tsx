import React, { useRef, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

const Container = styled.form`
  ${tw`flex border-b-[1px] border-b-gray py-3 w-full`}
`;
const InputSpan = styled.span`
  ${tw`mr-5`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const Input = styled.input`
  ${tw`w-full text-sm font-medium placeholder:text-sm placeholder:font-semibold focus:outline-none `}
`;

const SearchBar = ({ onSubmit }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearchChange = (e: Event) => {
    const target = e.target as HTMLInputElement;

    if ((e as KeyboardEvent).key === "Enter") {
      e.preventDefault();
    }
    setSearchQuery(target.value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchQuery: target.value,
      };
      onSubmit(formValue);
    }, 300);
  };
  return (
    <Container>
      <InputSpan>
        <SearchIcon />
      </InputSpan>
      <Input
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      ></Input>
    </Container>
  );
};
export default SearchBar;
