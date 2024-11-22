import 'react-i18next';
import ENGLISH from '@locales/en.json';
import VIETNAMMESE from '@locales/vi.json';
import KOREAN from '@locales/kr.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      en: typeof ENGLISH;
      vi: typeof VIETNAMMESE;
      kr: typeof KOREAN;
    };
  }
}
