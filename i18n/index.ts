import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import type { TranslationObject } from "./types";

import en from "./en";
import ja from "./ja";

const translations: Record<string, TranslationObject> = {
	en,
	ja,
};

const i18n = new I18n(translations);

i18n.locale = getLocales()[0].languageCode ?? "en";
i18n.enableFallback = true;

export default i18n;
