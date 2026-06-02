// App.jsx
// Sets up React Router — each page is its own route

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import { ThemeProvider } from "./ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      {/* BrowserRouter enables client-side routing (uses the URL bar) */}
      <BrowserRouter>
        {/* Navbar is always visible on every page */}
        <div className="app">
          <Navbar />

          {/* Routes decides which page component to show based on the URL */}
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<AboutPage />} />
            <Route path="/skills"     element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects"   element={<ProjectsPage />} />
            <Route path="/contact"    element={<ContactPage />} />
          </Routes>

          <footer className="footer">
            <p>© 2026 Rishi Thakker</p>
          </footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
