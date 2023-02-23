import React from "react";
import logo from "./BlackWomenMDNetworkLogo1.jpg";
import twitter from "./twitter.jpg";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-links">
      <a href="/">Home</a>
      <a href="/directory">Membership</a>
      <a href="/jobs">Resources</a>
      <a href="/events">Events</a>
      <a href="/societies">Community</a>
    </div>
    <div className="footer-image">
      <img className="logo-img" src={logo} alt="" />
    </div>
    <div className="footer-contact">
      <a href="/">Contact Us</a>
      <a href="/">Follow Us:</a>
      <img className="twitter-img" src={twitter} alt="" />
    </div>
  </div>
);

export default Footer;
