import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import ContactMe from "./components/pages/ContactMe";
import Education from "./components/pages/Education";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
