import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Experience from './pages/experience';
import ContactMe from './pages/contact-me';
import Nav from "./components/Nav";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <Nav></Nav>
      {/*<Navbar />*/}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact-me' element={<ContactMe />} />
        {/*<Route path='/sign-in' element={<SignIn />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
