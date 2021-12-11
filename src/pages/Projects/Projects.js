import React from 'react'
import styled from "styled-components"
import {useTranslation} from "react-i18next";
import {projectsData} from "./ProjectsData";
import {GoLocation} from "react-icons/go"
import {BiBuildingHouse, FcNext, GrNext} from "react-icons/all";
import {useNavigate} from "react-router-dom";

const Projects = () => {
	const {t} = useTranslation()
	const history = useNavigate()
	const handlePush = (id) => {
		history(`/projects/${id}`)
	}


	return (
		<ProjectsWrapper>
			<div className="container">
				<h1 className="title">{t("Наши объекты")}</h1>
				<ProjectItems>
					{
						projectsData.map((item) => {
							return <div className="project_item" key={item.id}>
								<div className="image">
									<img src={item.image} alt=""/>
								</div>
								<div className="name">
									<h3><BiBuildingHouse/>
										{item.name}</h3>
								</div>
								<div className="address">
									<GoLocation className="location_icon"/>
									<span>{item.address}</span>
								</div>
								<div className="button">
									<button className="custom_button"
									        onClick={() => handlePush(item.id)}>{t("Подробнее")} <GrNext
										className="next_icon"/></button>
								</div>

							</div>
						})

					}
				</ProjectItems>
			</div>
		</ProjectsWrapper>
	)
}

export default Projects

const ProjectsWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;

  .title {
    margin-bottom: 20px;
    animation: backInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s;  
 
  }
`

const ProjectItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s;

  .project_item {
    //cursor: pointer;
    box-shadow: 5px 5px 15px 0px #000000;
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;
    padding-bottom: 70px;

    .image {
      transition: all 0.3s ease;
      margin-bottom: 10px;
      overflow: hidden;

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        transition: all 0.3s ease;
      }
    }

    :hover {
      //box-shadow: none;
      .image img {
        transform: scale(1.3);
        transition: all 0.3s ease;
      }
    }


    .address {
      padding: 10px;
      display: flex;
      align-items: center;
    }

    .name {

      h3 {
        svg {
          margin-right: 10px;
          color: red;
          font-size: 20px;
        }

        display: flex;
        align-items: center;
        padding: 10px;
        text-align: center;
      }
    }

    .location_icon {
      margin-right: 10px;
      color: red;
      font-size: 20px;
    }

    .button {
      padding: 10px;
      display: flex;
      cursor: pointer;
      align-items: center;
      position: absolute;
      bottom: 7px;
      width: 100%;

      .next_icon {
        transform: translateY(3px);
        margin-left: 10px;
        margin-top: -5px;

        polyline {
          stroke: #fff;
        }
      }

      .custom_button {

        width: 100%;
      }
    }
  }

`
