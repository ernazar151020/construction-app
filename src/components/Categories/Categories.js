import React from 'react'
import styled from "styled-components"
import {categoriesData} from "../../helpers/categoriesData";
import {useLanguageContext} from "../../context/Context";
import {useTranslation} from "react-i18next";

const Categories = ({setCategory , handleClick}) => {
    const {checkLanguage} = useLanguageContext()
const {t} = useTranslation()


    return (
        <CategoriesWrapper>
            <div className = "item custom_button" onClick={()=>handleClick("all")}>
                {t("Все")}
            </div>
            {
                categoriesData.map((item , index)=>{
                    return <button className = "item custom_button" key={index} onClick={()=>handleClick(item.category)}>{checkLanguage(item).name}</button>
                })
            }
        </CategoriesWrapper>
    )
}

export default Categories

const CategoriesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(150px ,1fr));
    grid-gap: 10px;
    .item{
        text-align: center;
        margin: 0 10px;
    }

`
