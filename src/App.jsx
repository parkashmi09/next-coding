import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
// Import other pages as needed

function App() {
  return (
    <Router>
      <main className="font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
