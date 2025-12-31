import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./features/HomePage/HomePage";
import NavBar from "./layouts/NavBar";
import ThemeProviderWrapper from "./context/ThemeProvider";
import AboutPage from "./features/AboutPage/AboutPage";
import BlogPage from "./features/BlogPage/BlogPage";
import ContactForm from "./features/ContactPage/ContactPage";
import ProjectsPage from "./features/ProjectsPage/ProjectsPage";

function App() {
  return (
    <ThemeProviderWrapper>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProviderWrapper>
  );
}

export default App;
