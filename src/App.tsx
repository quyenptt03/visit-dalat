import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import DetailPlace from "./pages/DetailPlace";
import DestinationsPage from "./pages/DestionationsPage";
import { Route, Routes, useLocation } from "react-router-dom";
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
      </Routes>
    </>
  );
}

export default App;
