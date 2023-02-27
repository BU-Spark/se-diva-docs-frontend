import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Membership from "./pages/membership";
import Resources from "./pages/resources";
import Events from "./pages/events";
import Community from "./pages/community";
import SignIn from "./pages/signin";
import Join from "./pages/Join/join";
import Directory from "./pages/Directory/directory";
import ResumeBank from "./pages/resumebank";
import FindAnExpert from "./pages/findanexpert";
import ResumeReview from "./pages/resumereview";
import Headshot from "./pages/headshot";
import Coaching from "./pages/coaching";

function App() {
  useEffect(() => {
    document.title = "Black Women M.D. Network";
  }, []);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/join" element={<Join />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/resumebank" element={<ResumeBank />} />
        <Route path="/findanexpert" element={<FindAnExpert />} />
        <Route path="/resumereview" element={<ResumeReview />} />
        <Route path="/headshot" element={<Headshot />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
