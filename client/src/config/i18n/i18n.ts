import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import ENGLISH from '@locales/en.json'
import VIETNAMMESE from '@locales/vi.json'
import KOREAN from '@locales/kr.json'

export const resource = {
    en: {
        main: ENGLISH,
    },
    vi: {
        main: VIETNAMMESE,
    },
    kr: {
        main: KOREAN,
    },
}

i18next.use(initReactI18next).init({
    resources: resource,
    lng: "vi",
    fallbackLng: "vi",
    interpolation: {
        escapeValue: false,
    },
})

export default i18next;