import React from "react";
import styles from "./Background.module.css";
import buddies from "../images/blackwomenbuddies_modified.jpg";
import explain from "../images/blackwomanexplains.jpg";
import barbaque from "../images/barbaque.jpg";
import plant from "../images/plant.jpg";
import brunch from "../images/brunch.jpg";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-body">
      <div className="bwmdn-box">
        <img src={buddies} alt="" />
        <div className="">
          <p>Black Women M.D. Network</p>
          <a href="/join" className="btn btn-join btn-lg active" role="button" aria-pressed="true">Join Our Community</a>
        </div>
      </div>
      <div className="intro-box">
        <h1>Unapologetically Amplifying Black Women in Medicine!</h1>
        <p>Diva Docs Boston is an organization composed of over 250 Black women physicians and trainees (medical students, residents, and fellows) working, studying or living in Greater Boston. Our members are represented in every medical speciality and work in a variety of health and non-health care settings.</p>
      </div>
      <div className="events-box">
        <img className="barbaque-img" src={barbaque} alt="" />
        <img className="plant-img" src={plant} alt="" />
        <img className="brunch-img" src={brunch} alt="" />
      </div>
      <div className="membership-box">
        <div className="membership-text">
          <h1>Join Our Membership Directory!</h1>
          <p>Connect with other prominent black women physicians, mentors and sponsors. <br></br>
          <br></br>
          — or —<br></br>
          <br></br>
          Mentor aspiaring black women medical or undergraduate students!</p>
          <a href="/directory" className="btn btn-search btn-lg active" role="button" aria-pressed="true">Search our members</a>
        </div>
        <img className="membership-img" src={explain} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
