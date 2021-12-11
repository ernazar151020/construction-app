import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_in_kg from "./translation_in_kg.json"
import translation_in_ru from "./translation_in_ru.json"


const resources = {
	kg: {
		translation: translation_in_kg,
	},
	ru: {
		translation: translation_in_ru,
	},

};


let selectedLanguague = localStorage.getItem("lang")
	? localStorage.getItem("lang")
	: "ru";


i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: selectedLanguague,

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

localStorage.setItem("lang", selectedLanguague);

export default i18n;


