import React from "react";
import "./index.scss";
const SocialMedia = () => {
  return (
    <div>
      <div className="social">
        <ul className="icons">
          <li className="fbIcon">
            <a
              href="https://www.facebook.com/elizadeeleddin/"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/aladdin.alizada/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aladdin-alizada-402022231/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/aladdinalizada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
