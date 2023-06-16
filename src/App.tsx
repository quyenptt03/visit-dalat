import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  HomePage,
  DestinationsPage,
  DestinationDetailsPage,
  ArticlesPage,
  ArticleDetailsPage,
  ErrorPage,
} from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:id" element={<DestinationDetailsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticleDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
