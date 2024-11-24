import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import RoomsSection from './pages/RoomsSection';
import Testimonials from './pages/Testimonials';
import BlogSection from './pages/BlogSection';
import BookVehicle from "./pages/BookVehicle"


function App() {
  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsSection />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/blogs" element={<BlogSection />}/>
          <Route path="/book-vehicle" element={<BookVehicle />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;