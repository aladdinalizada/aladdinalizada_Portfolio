import React from "react";
import "./index.scss";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  let language = localStorage.getItem("i18nextLng");

  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="head">
            {/* <h2>Get in Touch</h2> */}
            <p>{t("contact")}</p>
          </div>
          <div className="contact">
            <div className="mail">
              <h3>{t("email")}</h3>
              <p>
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:eledbra@gmail.com" className="email">
                  Eledbra@gmail.com
                </a>
              </p>
            </div>
            <div className="phone">
              <h3>{t("phone")}</h3>
              <p>
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+994 50 599 87 07" className="phone">
                  +994 50 599 87 07
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
