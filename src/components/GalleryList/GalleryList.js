import React from 'react'
import styled from "styled-components"
import {useLanguageContext} from "../../context/Context";
import GalleryBigTable from "./GalleryBigTable";
import GalleryTable from "./GalleryTable";


const GalleryList = () => {

	const {smallTableView} = useLanguageContext()

	if (!smallTableView) {
		return <GalleryBigTable/>
	}

	return (
		<GalleryTable/>
	)
}

export default GalleryList

const GalleryListWrapper = styled.div`

`
