import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="navigation__section text-navigation">
      <p className="m-05">
        {t("footerMsg")}
      </p>
    </footer>
  )
}

export default Footer;