import React, { useRef, useState } from "react";
import { Container, Input, InputSpan } from "./styles";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

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
