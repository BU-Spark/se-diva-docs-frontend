import React from "react";
import logo from "../../images/BlackWomenMDNetworkLogo1.png";
import twitter from "./twitter.jpg";
import "./Footer.css";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { TwitterShareButton, TwitterIcon } from 'react-share';

function Footer() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  console.log("is the user authed? " + isAuthenticated());

  const logOut = () => {
    signOut();
    navigate("/signin");
  };
  if (isAuthenticated()) {
    return (
      <div className="footer">
        <div className="footer-links">
          <a href="/">BWMDN</a>
          <a href="/about">About</a>
          <a href="/members">Membership</a>
          <a href="/resources">Resources</a>
          <a href="/news">News</a>
        </div>
        <div className="footer-image">
          <img className="logo-img" src={logo} alt="" />
        </div>
        <div className="footer-contact">
          <a href={"mailto:info@blackwomenmdnetwork.com"}>Contact Us</a>
          <a className="follow">Follow Us:</a>
          <TwitterShareButton
            url={'https://twitter.com/blackwomendocs?lang=en'}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <div className="footer-links">
          <a href="/">BWMDN</a>
        </div>
        <div className="footer-image">
          <img className="logo-img" src={logo} alt="" />
        </div>
        <div className="footer-contact">
          <a href={"mailto:info@blackwomenmdnetwork.com"}>Contact Us</a>
          <p>Follow Us:</p>
          <TwitterShareButton
            url={'https://twitter.com/blackwomendocs?lang=en'}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    );
  }
}

export default Footer;
