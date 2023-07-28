import "i18next";
import { defaultNS, resources } from "../i18n/i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: typeof defaultNS;
    // custom resources type
    resources: (typeof resources)["vi"];
    // other
  }
}
