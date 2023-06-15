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
                  *********@gmail.com
                </a>
              </p>
            </div>
            <div className="phone">
              <h3>{t("phone")}</h3>
              <p>
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+994 50 599 87 07" className="phone">
                  +994 ** *** ** **
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={language === "az" ? { display: "block" } : { display: "none" }}
      >
        <h3>User Data</h3>
        <p>
          City:
          {JSON.parse(localStorage.getItem("location")).city}
        </p>
        <p>
          Country:
          {JSON.parse(localStorage.getItem("location")).country}
        </p>
        <p>
          IP:
          {JSON.parse(localStorage.getItem("location")).ip}
        </p>
        <p>
          Latitude:
          {JSON.parse(localStorage.getItem("location")).latitude}
        </p>
        <p>
          Longitude:
          {JSON.parse(localStorage.getItem("location")).longitude}
        </p>
        <p>
          Postal:
          {JSON.parse(localStorage.getItem("location")).postal}
        </p>
        <p>
          Region:
          {JSON.parse(localStorage.getItem("location")).region}
        </p>
        <p>
          Timezone:
          {JSON.parse(localStorage.getItem("location")).timezone}
        </p>
      </div>
    </div>
  );
};

export default Contact;
