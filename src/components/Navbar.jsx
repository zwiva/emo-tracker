import { useTranslation } from "react-i18next";

const Navbar = ({ today }) => {
  const { t, i18n } = useTranslation();

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav className="navigation__section p-05">
      <h3>
        WomanMoodDetector
      </h3>
      <div className="flex g-05">
        <span className="text-navigation">Today: {today}</span>
        {/* <h1>{t("welcome")}</h1> */}
        <button onClick={() => changeLanguage("en")} className="p-05" >En</button>
        <button onClick={() => changeLanguage("es")} className="p-05" >Es</button>
      </div>

    </nav>
  )
}

export default Navbar;