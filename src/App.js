import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Modules from './components/Modules.tsx';
import Experience from './components/Experience.tsx';
import Pricing from './components/Pricing.tsx';
import Blogs from './components/Blogs.tsx';
import Contact from './components/Contact.tsx';
import Demo from './components/Demo.tsx';
import Login from './components/Login.tsx'; // Import Login component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/modules" element={<Modules />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/login" element={<Login />} /> {/* Add Login route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
