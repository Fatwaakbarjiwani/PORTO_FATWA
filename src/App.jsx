import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPorto from "./pages/DetailPorto";
import Navbar from "./components/Navbar";
import AboutMeHero from "./components/cv/AboutMeHero";

export default function App() {
  return (
    <div className="bg-primary">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DetailPorto />} />
          <Route path="/about" element={<AboutMeHero />} />
        </Routes>
      </Router>
    </div>
  );
}
