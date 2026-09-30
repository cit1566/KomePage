import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiaryPage from "./pages/DiaryPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <>
      <Header />
      <div className={"main_wrraper"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/diary" element={<DiaryPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
