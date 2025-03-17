import { useTranslation } from "react-i18next";

const Navbar = ({ today }) => {
  const { t, i18n } = useTranslation();

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav className="navigation__section">
      <div className="navigation__section--body m-05 g-05">

        <div className="w-100 flex-between wrap">
          <h3>
            WomanMoodDetector
          </h3>
          <p className="text-navigation">{t("today")} {today}</p>
        </div>

        <div className="flex g-05 align_i-center">
          {/* <h1>{t("welcome")}</h1> */}
          <button onClick={() => changeLanguage("en")} className="p-05" style={{ maxHeight: '3em' }}>En</button>
          <button onClick={() => changeLanguage("es")} className="p-05" style={{ maxHeight: '3em' }} >Es</button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;