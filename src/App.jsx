import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import Preloader from "./Preloader.jsx";
import Slider from "./Slider.jsx";
import About from "./About.jsx";
import Cmt from "./Cmt.jsx";
import Big from "./Big.jsx";
import Bigcmt from "./Bigcmt.jsx";
import Contact from "./Contact.jsx";
import Scroller from "./Scroller.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Blog from "./Blog.jsx";
import "./montserrat.css";

console.warn = () => {};

function App() {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';

  // Detect refresh
  const [showPreloader, setShowPreloader] = useState(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoaded');
    const isPageReload = performance.navigation.type === 1; // 1 means the page was reloaded
    return !hasLoadedBefore || (isHomeRoute && isPageReload);
  });

  useEffect(() => {
    if (showPreloader) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 5000); // Adjust time as needed
      return () => clearTimeout(timer);
    }
  }, [showPreloader]);

  return (
    <>
      {showPreloader && isHomeRoute && <Preloader />}
      <Navbar />
      <Slider />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/big" element={<Big />} />
        <Route path="/bigcmt" element={<Bigcmt />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Cmt />
      <Contact />
      <Scroller />
      <Footer />
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}