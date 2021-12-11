import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import {useNavigate, useParams} from "react-router-dom";
import {projectsData} from "../Projects/ProjectsData";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import {useTranslation} from "react-i18next";
import {FcPrevious} from "react-icons/all";

const ProjectDetail = () => {

	const {id} = useParams()
	const [projectDetail, setProjectDetail] = useState(null)
	const {t} = useTranslation()
	const history = useNavigate()

	const handlePrev = () => {
		history("/projects")
	}

	useEffect(() => {
		const findById = projectsData.find((item) => item.id === Number(id))

		setProjectDetail({...findById})
	}, [id])

	useEffect(() => {
		const findById = projectsData.find((item) => item.id === Number(id))

		setProjectDetail({...findById})
	}, [])


	return (
		<ProjectDetailWrapper>
			<div className="container">
				<div className="prev_button">
					<button className="custom_button" onClick={handlePrev}><FcPrevious/>{t("Назад")}</button>
				</div>
				<ProjectDetailContent>
					<div>
						<ImageGallery images={projectDetail?.gallery}/>
						<div className="address">
							<h3> Адресс : </h3><span>{projectDetail?.address}</span>

						</div>
					</div>
					<ProjectDetailInfo>
						<h1>{projectDetail?.name}</h1>
						<p>{projectDetail?.text}</p>
					</ProjectDetailInfo>
				</ProjectDetailContent>
			</div>
		</ProjectDetailWrapper>
	)
}

export default ProjectDetail

const ProjectDetailWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;

  .prev_button {
    margin: 20px 0;

    button {
      display: flex;
      align-items: center;
      svg{
        margin-right: 5px;
      }
    }

  }
`

const ProjectDetailContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media(max-width: 900px){
    display: block;
  }

  .address {
    margin-top: 30px;
    margin-bottom: 30px;

    h3 {
      color: black;
      line-height: 2;

      span {
        font-size: 15px;
      }
    }
  }

`

const ProjectDetailInfo = styled.div`
  h1 {
    margin-bottom: 20px;
    color: #102A42;
  }

  p {
    line-height: 2;

  }

`
