import React from "react";
import { useState } from 'react';
import styles from "./Background.module.css";
import patient from "../images/blackdoctorpatient2.jpg";
import workshop from "../images/blackwomenworkshop.jpg";
import "./about.css";

const About = () => {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showDetails4, setShowDetails4] = useState(false);
  const [showDetails5, setShowDetails5] = useState(false);
  const [showDetails6, setShowDetails6] = useState(false);

  function handleClick1() {
    setShowDetails1(!showDetails1);
  }
  function handleClick2() {
    setShowDetails2(!showDetails2);
  }
  function handleClick3() {
    setShowDetails3(!showDetails3);
  }
  function handleClick4() {
    setShowDetails4(!showDetails4);
  }
  function handleClick5() {
    setShowDetails5(!showDetails5);
  }
  function handleClick6() {
    setShowDetails5(!showDetails5);
  }
  return (
    <div className="welcome-body">
      <div className="bwmdn-box">
        <img src={patient} alt="" />
        <div className="">
          <p>About Black Women M.D. Network</p>
        </div>
      </div>
      <div className="intro-box">
        <h1>Who are we and what do we do?</h1>
        <p>The Black Women M.D. Network (BWMDN) is a 501c3 nonprofit organization that matches Black women doctors and medical trainees with opportunity. We help Black women doctors advance in their medical careers by connecting them to opportunities such as professional development programming, leadership training, one-on-one coaching, and member/partner sponsorships. Our community of Black women physicians also serve as resources for information, career advice and mentorship. The BWMDN is laser focused on retaining and promoting Black women after acceptance into medical school, during their professional training as residents and fellows, and beyond training. We strive to meet the needs of our members at every stage of their professional medical career!</p>
        <h1>How can you apply to join the BWMDN?</h1>
        <p>All Black women medical students, residents, fellows, and physicians beyond training are invited to apply to the network by creating a login in and filling out the membership request form. Promising candidates will be invited for a virtual interview with leaders of the BWMDN. If accepted, members will be invited to create a membership profile and join the BWMDN membership directory to connect to opportunities. We are looking for members who will be actively engaged in the BWMDN community and who are interested in supporting other Black women doctors.</p>
        <h1>How do you get to know members in the BWMDN?</h1>
        <p>Each new member is assigned to a membership society based on their level of training.  Members are also assigned to “pods” that bring together Black women doctors and trainees from different levels of training. The membership societies and pods provide intimate circles within the larger community Black women doctors for support, fellowship, mentorship, and sponsorship. Throughout the year, members join virtual and in-person meetings, webinars, and conferences to connect with their societies, pods and the larger BWMDN community.</p>
      </div>
      <div className="membership-box">
        <div className="membership-text">
          <h1>BWMDN Membership Societies and Subscription Fees</h1>
          <button className="btn btn-search btn-lg active" onClick={handleClick1}>Nancy E. Oriol Society</button>
                {showDetails1 && (
                  <div>
                    <p>Current medical student</p>
                    <p>Dr. Nancy Oriol is a Harvard anesthesiologist, inventor, community advocate, and the co-founder of the Harvard MedScience program for high school students.</p>
                    <p>Fee: $125/year</p>
                  </div>
                )}
          <button className="btn btn-search btn-lg active" onClick={handleClick2}>Mae Jemison Society</button>
                {showDetails2 && (
                  <div>
                    <p>Current resident or fellow</p>
                    <p>Mae C. Jemison, MD: Dr. Jemison is a physician, scientist, teacher, chemical engineer, and astronaut.</p>
                    <p>Fee: $250/year</p>
                  </div>
                )}
          <button className="btn btn-search btn-lg active" onClick={handleClick3}>Alexa Canady Society</button>
                {showDetails3 && (
                  <div>
                    <p>0-5 years post residency and fellowship training</p>
                    <p>Alexa Irene Canady, MD: Dr. Canady is the first Black woman to become a neurosurgeon in the United States.</p>
                    <p>Fee: $500/year</p>
                  </div>
                )}
          <button className="btn btn-search btn-lg active" onClick={handleClick4}>Barbara Ross Society</button>
                {showDetails4 && (
                  <div>
                    <p>5-10 years post residency and fellowship training or by invitation</p>
                    <p>Barbara Ross-Lee, DO: Dr. Ross-Lee was the first Black woman to be appointed dean of a US medical school. She is the sister of world-famous singer Diana Ross of Motown fame.</p>
                    <p>Fee: $1000/year</p>
                  </div>
                )}
          <button className="btn btn-search btn-lg active" onClick={handleClick5}>Joycelyn Elders Society</button>
                {showDetails5 && (
                  <div>
                    <p>10-20 years post residency/fellowship training</p>
                    <p>Joycelyn Elders, MD:  Dr. Elders was the first person in the state of Arkansas to become board certified in pediatric endocrinology, the 15th Surgeon General of the United States, and the second woman to head the US Public Health Service.</p>
                    <p>Fee: $2000/year or In-kind contribution of mentorship and sponsorship of members</p>
                  </div>
                )}
          <button className="btn btn-search btn-lg active" onClick={handleClick6}>Rebecca Crumpler Society</button>
                {showDetails6 && (
                  <div>
                    <p>{'>20'} years post-residency/fellowship or by special invitation</p>
                    <p>Rebecca Crumpler, MD: Dr. Crumpler was the first Black woman in the US to earn an MD. She became a doctor in 1864 and published a book of medical advice for women and children in 1883.</p>
                    <p>Fee: $4000/year or In-kind contribution of mentorship and sponsorship of members</p>
                  </div>
                )}
        </div>
        <img className="membership-img" src={workshop} alt="" />
      </div>
    </div>
  );
};

export default About;
