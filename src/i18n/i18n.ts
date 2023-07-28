import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import NAV_EN from "./locales/en/navbar.json";
import FOOTER_EN from "./locales/en/footer.json";
import FOOTER_VI from "./locales/vi/footer.json";
import NAV_VI from "./locales/vi/navbar.json";
import HOME_EN from "./locales/en/home.json";
import HOME_VI from "./locales/vi/home.json";
import DESTINATIONS_EN from "./locales/en/destinations.json";
import DESTINATIONS_VI from "./locales/vi/destinations.json";
import DESTINATION_EN from "./locales/en/destination.json";
import DESTINATION_VI from "./locales/vi/destination.json";
import ARTICLES_EN from "./locales/en/articles.json";
import ARTICLES_VI from "./locales/vi/articles.json";
import ARTICLE_EN from "./locales/en/article.json";
import ARTICLE_VI from "./locales/vi/article.json";
import LOGIN_EN from "./locales/en/login.json";
import LOGIN_VI from "./locales/vi/login.json";
import REGISTER_EN from "./locales/en/register.json";
import REGISTER_VI from "./locales/vi/register.json";
import ERRORPAGE_EN from "./locales/en/errorpage.json";
import ERRORPAGE_VI from "./locales/vi/errorpage.json";

export const defaultNS = "home" as const;

export const resources = {
  en: {
    nav: NAV_EN,
    footer: FOOTER_EN,
    home: HOME_EN,
    destinations: DESTINATIONS_EN,
    destination: DESTINATION_EN,
    articles: ARTICLES_EN,
    article: ARTICLE_EN,
    login: LOGIN_EN,
    register: REGISTER_EN,
    errorpage: ERRORPAGE_EN,
  },
  vi: {
    nav: NAV_VI,
    footer: FOOTER_VI,
    home: HOME_VI,
    destinations: DESTINATIONS_VI,
    destination: DESTINATION_VI,
    articles: ARTICLES_VI,
    article: ARTICLE_VI,
    login: LOGIN_VI,
    register: REGISTER_VI,
    errorpage: ERRORPAGE_VI,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  ns: [
    "nav",
    "footer",
    "home",
    "destinations",
    "destination",
    "articles",
    "article",
    "login",
    "register",
    "errorpage",
  ],
  fallbackLng: "vi",
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
