import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import {useLanguageContext} from "../../context/Context";
import {BsFillGridFill, BsList} from "react-icons/all";
import Select from "react-select";
import {categoriesData} from "../../helpers/categoriesData";


const Sort = () => {

	const {
		smallTableView,
		setBigTableView,
		setFilteredImages,
		filteredImages,
		images,
		setTableView
	} = useLanguageContext()
	const [selectedCategory, setSelectedCategory] = useState(categoriesData[0])


	const handleChangeCategory = (value) => {
		setSelectedCategory(value)
	}

	useEffect(() => {
		if (selectedCategory?.category == "all") {
			setFilteredImages(images)
		} else {
			const filteredItem = images.filter((item) => item.category === selectedCategory?.category)
			setFilteredImages(filteredItem)
		}

	}, [selectedCategory])




	return (
		<Wrapper>
			<div className="btn-container">
				<button onClick={setTableView} type={"button"} className={smallTableView ? "active" : null}>
					<BsFillGridFill/>
				</button>
				<button onClick={setBigTableView} type={"button"} className={!smallTableView ? "active" : null}>
					<BsList/>
				</button>
			</div>
			<div className="select_container">
				<Select options={categoriesData} value={selectedCategory} onChange={handleChangeCategory}/>
			</div>
		</Wrapper>
	)
}

export default Sort

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  .btn-container {
    margin-right: 2rem;
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: 1px solid #000;
      color: #000;
      width: 1.5rem;
      border-radius: 7px;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      margin: 0 5px;

      svg {
        font-size: 1rem;
      }
    }

    .active {
      background: #1461FC;
      color: #fff;
    }
  }

  .select_container {
    display: block;
    width: 70%;
  }
`
