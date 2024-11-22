import { useLocation, useParams } from "react-router-dom";

export const useLanguage = () => {
  const { pathname } = useLocation();
  const { lang } = useParams();
  const language = pathname.split(`/${lang}/`)[1];
  return language;
};
