import React from "react";
import Article from "./components/Article";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";

const ArticleDetailsPage = () => {
  return (
    <>
      <Navbar />
      <Article />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default ArticleDetailsPage;
