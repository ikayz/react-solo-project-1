import React from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";

function Footer() {
  return (
    <footer>
      <ul className="social-icons">
        <li>
          <img src={twitter} />
        </li>
        <li>
          <img src={facebook} />
        </li>
        <li>
          <img src={instagram} />
        </li>
        <li>
          <img src={github} />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
