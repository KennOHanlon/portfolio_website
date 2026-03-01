import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Experience from './pages/experience';
import Contact from './pages/contact';
import Nav from "./components/Nav";
import Projects from "./pages/projects";
import PostEmailSubmission from "./pages/PostEmailSubmission";
import ScrollToTop from "./components/ScrollToTop";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <Router>
        <ScrollToTop />
        <Nav></Nav>
      {/*<Navbar />*/}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/thanks' element={<PostEmailSubmission/>} />
        {/*<Route path='/sign-in' element={<SignIn />} />*/}
        </Routes>

        <BottomNav />
    </Router>
  );
}

export default App;
