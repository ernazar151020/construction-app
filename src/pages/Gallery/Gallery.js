import React, {useState} from 'react'
import styled from "styled-components"
import GalleryList from "../../components/GalleryList/GalleryList";
import {useLanguageContext} from "../../context/Context";
import Sort from "../../components/Sort/Sort";

const Gallery = () => {
	// const [category, setCategory] = useState(1)


	const {smallTableView, setFilteredImages, filteredImages, images} = useLanguageContext()


	// const handleClick = (value) => {
	// 	setCategory(value)
	// 	if (value == "all") {
	// 		setFilteredImages(images)
	// 	} else {
	// 		const filteredArray = images.filter((item) => item.category === value)
	// 		setFilteredImages(filteredArray)
	// 	}
	// }


	return (
		<GalleryWrapper>
			<div className="container">
				<h1 className="title">Галерея</h1>
				<GalleryHeader>
					{/*<Categories setCategory={setCategory} handleClick={handleClick}/>*/}
					<Sort/>
				</GalleryHeader>
				<GalleryList/>

			</div>
		</GalleryWrapper>
	)
}

export default Gallery

const GalleryWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;

  .title {
    margin-bottom: 20px;
    color: #102A42;
  }
`
const GalleryHeader = styled.div`

`

