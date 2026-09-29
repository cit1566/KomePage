import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Diary from "./pages/Diary";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div className={"main_wrraper"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/diary" element={<Diary />} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
