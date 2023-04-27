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
        <p>The Black Women M.D. Network (BWMDN) is a 501(c)(3) nonprofit organization that matches Black women doctors and medical trainees with opportunity. We help Black women doctors advance in their medical careers by connecting them to opportunities such as professional development programming, leadership training, one-on-one coaching, and member/partner sponsorships. Our community of Black women physicians also serve as resources for information, career advice and mentorship. The BWMDN is laser focused on retaining and promoting Black women after acceptance into medical school, during their professional training as residents and fellows, and beyond training. We strive to meet the needs of our members at every stage of their professional medical career!</p>
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
