import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home";
import MenuContainer from "./pages/MenuContainer";
import About from "./components/About/About";
import Specials from "./components/Specials/Specials";
import MonthlyHighlights from "./components/MonthlyHighlight/MonthlyHighlight";
import DiningPage from "./components/DinningPage/DinningPage";
import ReviewsPage from "./components/ReviewPage/ReviewPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import ContactPage from "./components/ContactPage/ContactPage";
import FooterPage from "./components/FooterPage/FooterPage";


function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<FooterPage />} />
        <Route path="/contact" element={<ContactPage />} />
       
      </Routes>
    </Router>
  );
}

export default App;
