
import Experience from "./routes/Experience"
import React, { useContext } from "react";
import { ThemeContext } from "./components/Theme";
import Home from "./routes/Home"
import Projects from "./routes/Projects"
import { Route, Routes } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import "./App.css"

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
  <div className="App" data-theme={theme}>

    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
