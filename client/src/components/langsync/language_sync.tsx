import { useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import i18next from "i18next";

const supportedLanguages = ["en", "vi", "kr"];

const LanguageSync = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && supportedLanguages.includes(lang)) {
      i18next.changeLanguage(lang);
    } else {
      navigate(`/${i18next.language}`, { replace: true });
    }
  }, [lang, navigate]);

  return <Outlet />;
};

export default LanguageSync;
