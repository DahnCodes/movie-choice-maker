import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Results from "./components/Results";
import Navbar from "./components/Navbar";
import Prefrences from "./components/Prefrences";
import VideoBackground from "./components/VideoBackground";

function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<VideoBackground />}></Route>
          <Route path="/prefrences" element={<Prefrences />}></Route>
          <Route path="/results" element={<Results />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
