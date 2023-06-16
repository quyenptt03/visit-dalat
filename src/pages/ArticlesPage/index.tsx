import ArticlesList from "./ArticlesList";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import BackToTopButton from "../../components/BackToTopButton";
import Footer from "../../components/Footer";
const ArticlesPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ArticlesList />
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default ArticlesPage;
