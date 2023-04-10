import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import About from "./pages/about";
import News from "./pages/news";
import WhoAreWe from "./pages/whoarewe";
import Mission from "./pages/mission";
import Membership from "./pages/membership";
import Team from "./pages/team";
import Directors from "./pages/directors";
import Resources from "./pages/resources";
import Events from "./pages/events";
import Community from "./pages/community";
import SignIn from "./pages/signin";
import Join from "./pages/Join/join";
import Directory from "./pages/directory";
import ResumeBank from "./pages/resumebank";
import FindAnExpert from "./pages/findanexpert";
import ResumeReview from "./pages/resumereview";
import Headshot from "./pages/headshot";
import Coaching from "./pages/coaching";

import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit } from "./components/Admin/users";
import authProvider from "./components/Admin/authProvider";
//import simpleRestProvider from 'ra-data-simple-rest';



const dataProvider = jsonServerProvider('https://se-diva-docs.herokuapp.com');
//const dataProvider = simpleRestProvider('https://se-diva-docs.herokuapp.com');
console.log(dataProvider)

function App() {
  useEffect(() => {
    document.title = "Black Women M.D. Network";
  }, []);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/whoarewe" element={<WhoAreWe />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/team" element={<Team />} />
        <Route path="/directors" element={<Directors />} />
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
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="applicants/view" list={UserList} edit={UserEdit} show={ShowGuesser}/>
      </Admin>
      <Footer />
    </Router>
  );
}

export default App;
