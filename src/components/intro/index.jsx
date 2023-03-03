import React from "react";
import "./index.scss";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
const Introduction = () => {
  const { t, i18n } = useTranslation();

  const handleLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <div className="intro">
        <div className="changeButtons">
          <button onClick={() => handleLang("en")}>English</button>
          <button onClick={() => handleLang("az")}>Azərbaycanca</button>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="animate-charcter">{t("intro")}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
