import ArticlesList from "./ArticlesList";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";
const ArticlesPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ArticlesList />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default ArticlesPage;
