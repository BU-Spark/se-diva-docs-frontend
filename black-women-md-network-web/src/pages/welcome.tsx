import React from "react";
import styles from "./Background.module.css";
import buddies from "../images/blackwomenbuddies_modified.jpg";
import explain from "../images/blackwomanexplains.jpg";
import mentorship from "../images/BlackWomanCEO.jpg";
import training from "../images/blackwomenworkshop.jpg";
import sponsorship from "../images/blackwomencoaching.jpg";
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
        <h1>We Match Black Women Doctors with Opportunity!</h1>
        <p>The Black Women MD Network is a 501(c)(3) nonprofit that connects Black women doctors with opportunity to help advance their medical careers. We provide black woman physician to physician mentorships and connect members with professional development programming, leadership training, one-on-one coaching, and member/partner sponsorships.</p>
      </div>
      <div className="events-box">
        <div>
          <a href="/mentorship">
            <img className="mentorship-img" src={mentorship} alt="" />
          </a>
          <h1>Mentorship</h1>
        </div>
        <div>
          <a href="/training">
            <img className="training-img" src={training} alt="" />
          </a>
          <h1>Training</h1>
        </div>
        <div>
          <a href="/sponsorship">
            <img className="sponsorship-img" src={sponsorship} alt="" />
          </a>
          <h1>Sponsorship</h1>
        </div>
      </div>
      <div className="membership-box">
        <div className="membership-text">
          <h1>Join Our Black Women Physician Directory!</h1>
          <a href="/directory" className="btn btn-search btn-lg active" role="button" aria-pressed="true">Search our members</a>
        </div>
        <img className="membership-img" src={explain} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
