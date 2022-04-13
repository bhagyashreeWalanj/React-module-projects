import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import About from './components/About';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Menus from './components/Menus';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/menus' exact element={<Menus />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
