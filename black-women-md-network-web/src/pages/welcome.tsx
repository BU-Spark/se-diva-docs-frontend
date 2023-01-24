import React from "react";
<<<<<<< HEAD
import buddies from "../assets/test.jpg";
import explain from "../assets/blackwomanexplains.jpg";
=======
import buddies from "../images/blackwomenbuddies_modified.jpg";
import explain from "../images/blackwomanexplains.jpg";
>>>>>>> origin/home-page
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-body">
<<<<<<< HEAD
      <img className="img-buddies" src={buddies} alt="Black Woman Buddies" />
      <p className="p-buddies">
        Black Women
        <br />
        M.D. Network
      </p>
      <a
        href="/join"
        className="btn btn-join btn-lg active"
        role="button"
        aria-pressed="true"
      >
        Join Our Community
      </a>
      <p className="p-welcome">
        Diva Docs Boston is an organization composed of over 250 Black women
        physicians and trainees (medical students, residents, and fellows)
        working, studying or living in Greater Boston. Our members are
        represented in every medical speciality and work in a variety of health
        and non-health care settings.
      </p>
      <a
        href=""
        className="btn btn-members btn-lg active"
        role="button"
        aria-pressed="true"
      >
        Featured Members
      </a>
      <img className="img-explain" src={explain} alt="Black Woman Explains" />
      <p className="p-member">
        First Name, Last Name
        <br />
        Profession
        <br />
        Years Experience
        <br />
        <br />
        Bio:
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
        fermentum dolor, mi quam amet, donec...
      </p>
      <a
        href="/directory"
        className="btn btn-search btn-lg active"
        role="button"
        aria-pressed="true"
      >
        Search Our Members
      </a>
=======
      <div className="intro">
        <img className="img-buddies" src = {buddies} alt = "Black Woman Buddies" />
        <p className="p-buddies">Black Women<br/>M.D. Network</p>
        <a href="/join" className="btn btn-join btn-lg active" role="button" aria-pressed="true">Join Our Community</a>
      </div>
      <div className="mission">
        <p className="p-mission">Unapologetically Amplifying Black Women in Medicine!</p>
        <p className="p-welcome">Diva Docs Boston is an organization composed of over 250 Black women physicians and trainees (medical students, residents, and fellows) working, studying or living in Greater Boston. Our members are represented in every medical speciality and work in a variety of health and non-health care settings.</p>
      </div>
      <div className="events">
        <p className="p-events">Events</p>
        <p className="p-events-join">Join us at one of our many events!</p>
      </div>
      <div className="members">
        <img className="img-explain" src = {explain} alt = "Black Woman Explains" />
        <p className="p-membership">Join Our Membership Directory!</p>
        <p className="p-member">
          Connect with other prominent black women physicians, mentors and sponsors.<br/> 
          <br/>
          — or —<br/>
          <br/>
          Mentor aspiaring black women medical or undergraduate students!<br/>
        </p>
        <a href="/directory" className="btn btn-search btn-lg active" role="button" aria-pressed="true">Search our members</a>
      </div>
>>>>>>> origin/home-page
    </div>
  );
};

export default Welcome;
