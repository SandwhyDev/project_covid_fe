import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provinsi from "./pages/provinsi";
import Indonesia from "./pages/indonesia";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indonesia" element={<Indonesia />} />
        <Route path="/provinsi" element={<Provinsi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
