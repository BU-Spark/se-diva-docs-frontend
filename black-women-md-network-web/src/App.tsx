import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Membership from './pages/membership';
import Resources from './pages/resources';
import Community from './pages/community';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </Router>
  );
}
  
export default App;
