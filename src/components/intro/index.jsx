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
