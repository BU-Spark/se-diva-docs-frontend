import React from "react";
import "./directory.css";
import SideBar from "./SideBar";

const Directory = () => {
  return (
    <div className="outside">
      <div className="container">
        <h1 className="title">Directory</h1>
        <div className="horizontal-line" />
        <div className="flex-container">
          <div className="search-bar">
            <SideBar></SideBar>
          </div>

          <div className="profiles">hello</div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
