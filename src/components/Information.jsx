import React from "react";
import profile from "../images/isaac.png";

function Information() {
  return (
    <header className="header">
      <img src={profile} width="250" alt="My profile picture" />
      <h1>Isaac Miti</h1>
      <h2>Frontend Developer</h2>
      <p>ikayz.dev</p>
      <button type="button" className="email-btn">
        <i className="fa fa-envelope"></i> Email
      </button>
      <button type="button" className="linkedin-btn">
        <i className="fa fa-linkedin-square"></i> LinkedIn
      </button>
    </header>
  );
}

export default Information;
