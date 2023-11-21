import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  HomePage,
  DestinationsPage,
  DestinationDetailsPage,
  ArticlesPage,
  ArticleDetailsPage,
  PlacesToStayPage,
  ErrorPage,
  LoginPage,
  RegisterPage,
  ActivitiesPage,
} from "./pages";
import ArticlePageV2 from "./pages/ArticlePageV2";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route
          path="/destinations/places-to-stay"
          element={<PlacesToStayPage />}
        />
        <Route path="/destinations/:id" element={<DestinationDetailsPage />} />
        <Route path="/articles" element={<ArticlePageV2 />} />
        <Route path="/articlesv1" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticleDetailsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
