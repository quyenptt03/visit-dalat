import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import DetailPlace from "./pages/DetailPlace";
import DestinationsPage from "./pages/DestionationsPage";
import { Route, Routes, useLocation } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:id" element={<DetailPlace />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
    </>
  );
}

export default App;
