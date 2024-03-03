import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Experience from './pages/experience';
import Trips from './pages/trips';
import SignIn from './pages/sign-in';
import ContactMe from './pages/contact-me';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/trips' element={<Trips />} />
        <Route path='/contact-me' element={<ContactMe />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
