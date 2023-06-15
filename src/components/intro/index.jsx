import React from "react";
import "./index.scss";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
const Introduction = () => {
  const { t, i18n } = useTranslation();

  const handleSelect = (e) => {
    i18n.changeLanguage(e.target.value);
    // set the language from the local storage
    const language = localStorage.setItem("i18nextLng", e.target.value);
  };

  const location = fetch("https://ipapi.co/json/")
    .then((results) => results.json())
    .then((data) => {
      localStorage.setItem("location", JSON.stringify(data));
    });

  //  send location to the mail address
  const sendLocation = () => {
    const location = JSON.parse(localStorage.getItem("location"));
    const locationData = {
      city: location.city,
      country: location.country,
      ip: location.ip,
      latitude: location.latitude,
      longitude: location.longitude,
      postal: location.postal,
      region: location.region,
      timezone: location.timezone,
    };
    fetch("https://aladdin-alizada.herokuapp.com/api/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  sendLocation();
  return (
    <div>
      <div className="intro">
        <div className="changeButtons">
          <select
            name="language"
            id="language"
            onClick={(e) => handleSelect(e)}
          >
            <option value="en">English</option>
            <option value="az">Azerbaijan</option>
          </select>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="animate-charcter">{t("intro")}</h3>
              <p>{t("name")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
