import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/pages/Projects";
import Footer from "./components/layout/Footer";
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min_height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
