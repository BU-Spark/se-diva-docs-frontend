import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Membership from './pages/membership';
import Resources from './pages/resources';
import Events from './pages/events';
import Community from './pages/community';
import SignIn from './pages/signin';
import Join from './pages/join';


function App() {
  useEffect(() => {document.title = "Black Women M.D. Network"}, [])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/events' element={<Events />} />
        <Route path='/community' element={<Community />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/join' element={<Join />} />
      </Routes>
    </Router>
  );
}
  
export default App;
