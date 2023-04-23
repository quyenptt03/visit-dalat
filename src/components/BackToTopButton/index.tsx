import React, { useState, useEffect } from "react";
import IconButton from "../Button/IconButton";
import { Container } from "./styles";

const BackToTopButton = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setBackToTopBtn(true);
      } else setBackToTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      {backToTopBtn && <IconButton type="backToTopBtn" onClick={scrollUp} />}
    </Container>
  );
};

export default BackToTopButton;
