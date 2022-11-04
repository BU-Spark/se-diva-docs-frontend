import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Membership from './pages/membership';
import Resources from './pages/resources';
import Community from './pages/community';
import SignUp from './pages/signup';
import Join from './pages/join';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/community' element={<Community />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/join' element={<Join />} />
      </Routes>
    </Router>
  );
}
  
export default App;
