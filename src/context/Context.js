import React, {useContext, useState} from 'react';
import i18n from "../helpers/internationalize/internationalize";
import {galleryData} from "../pages/Gallery/GalleryData";

const LanguageCheckerContext = React.createContext()

const Context = ({children}) => {
	const [smallTableView, setSmallTableView] = useState(true)
	const [images, setImages] = useState(galleryData)
	const [filteredImages, setFilteredImages] = useState(galleryData)
	const [language, setLanguage] = useState(localStorage.getItem("lang"))


	const setTableView = () => {
		setSmallTableView(true)
	}

	const setBigTableView = () => {
		setSmallTableView(false)
	}

	const checkLanguage = (item = {}) => {
		if (language === 'ru') {
			return {
				title: item?.title_ru || item?.title,
				text: item?.text_ru || item?.text,
				name: item?.name_ru || item?.name,

			}
		}
		if (language === 'kg') {
			return {
				title: item?.title_kg || item?.title,
				text: item?.text_kg || item?.text,
				name: item?.name_kg || item?.name,


			}
		}

		return {
			title: item?.title,
			name: item?.name,
			text: item?.text,

		}

	}


	const switchLang = (lang) => {
		setLanguage(lang);
		i18n.changeLanguage(lang);
		localStorage.setItem('lang', lang);
	}


	return (
		<LanguageCheckerContext.Provider
			value={{
				switchLang,
				language,
				checkLanguage,
				smallTableView,
				setSmallTableView,
				setFilteredImages,
				filteredImages,
				images,
				setTableView,
				setBigTableView
			}}>
			{children}
		</LanguageCheckerContext.Provider>
	);
};

export default Context;


export const useLanguageContext = () => {
	return useContext(LanguageCheckerContext)
}