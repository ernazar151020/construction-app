import React from 'react'
import styled from "styled-components"
import BgImage from "../../assets/about-us-bg.jpg"
import {useTranslation} from "react-i18next";

const AboutUs = () => {
	const {t} = useTranslation()

	return (<>

			<AboutUsWrapper>
				<BackgroungImageWrapper>
					<img src={BgImage} alt=""/>
				</BackgroungImageWrapper>
				<div className="container">

					<AboutUsContent>
						<h1 className="title">{t("About_Us")}</h1>
						<p className="text">{t("about_us_text")}</p>
					</AboutUsContent>
				</div>

			</AboutUsWrapper>
		</>

	)
}

export default AboutUs

const AboutUsWrapper = styled.div`
  position: relative;
  //height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 50px;

`
const BackgroungImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  min-height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: bottom;
    background-size: cover;
  }
`

const AboutUsContent = styled.article`
  background: rgba(0, 0, 0, 0.7);
  background: #fff;
  position: relative;
  z-index: 90;
  color: #000;
  padding: 30px;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
  transition: all 0.3s ease;
  @media(max-width: 768px){
    width: 100%;
    padding: 10px;
  }

  :hover {
    box-shadow: 5px 5px 15px 0px #000000;
  }

  .title {
    animate-duration: 5s;
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s;
    margin-bottom: 20px;
    //animation-iteration-count: infinite;
  }

  .text {
    animate-duration: 5s;
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s;
    line-height: 25px;
    font-weight: 500;
  }
`
