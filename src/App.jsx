import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Evaluation from "./pages/Evaluation";
import Detection from "./pages/Detection";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/detection" element={<Detection />} />
      </Routes>
    </>
  );
}