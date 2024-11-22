import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import ENGLISH from '@locales/en.json'
import VIETNAMMESE from '@locales/vi.json'
import KOREAN from '@locales/kr.json'

export const resource = {
    en: ENGLISH,
    vi: VIETNAMMESE,
    kr: KOREAN,
}
// lay nn tu local khi reload lai trang

i18next.use(initReactI18next).init({
    resources: resource,
    lng: "vi",
    fallbackLng: "vi",
    interpolation: {
        escapeValue: false,
    },
})

export default i18next;