import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    // require is the best way to synchronously import values form a json
    en: {
        // tslint:disable-next-line
        translation: require('./locales/en.json')
    },
    fr: {
        // tslint:disable-next-line
        translation: require('./locales/fr.json')
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
