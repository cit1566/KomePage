import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiaryPage from "./pages/DiaryPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiaryDetailPage from "./pages/DiaryDetailPage";
import WriteDiaryPage from "./pages/WriteDiaryPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <Header />
      <div className={"main_wrraper"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/diary/:id" element={<DiaryDetailPage />} />
          <Route path="/write_diary" element={<WriteDiaryPage />} />

          {/* 지정되지 않은 경로 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
