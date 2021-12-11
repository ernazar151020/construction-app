import React from 'react'
import styled from "styled-components"
import BgVideo from "../../assets/video-2.mp4"
import {useTranslation} from "react-i18next";

const HomePage = () => {
	const {t} = useTranslation()

	return (
		<HomePageWrapper>
			<VideoWrapper>
				<video autoPlay loop muted className="background_video">
					<source src={BgVideo} type={"video/mp4"}/>
				</video>
			</VideoWrapper>

			<HomePageContent>
				<h1 className="title">Ernazar Construction Group</h1>
				<p className="text">{t("description")}</p>
			</HomePageContent>
		</HomePageWrapper>
	)
}

export default HomePage

const HomePageWrapper = styled.div`
  position: relative;
  min-height: 100vh;

  .background_video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const HomePageContent = styled.div`
  position: absolute;
  z-index: 90;
  background: rgba(255, 255, 255, 0.7);
  //background: rgba(34, 100, 200, 0.5);
  //background: rgba(0,0,0, 0.8);
  padding: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition:all 0.3s ease;
  animate-duration: 5s;
  animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s;
  @media(max-width: 768px){
width: 90%;
    padding: 10px;
    top: 60%;
  }
  :hover{
    //transform: scale(1.1);
    background: #1461FC;
    color: #fff;
    .title{
      color: #fff;
  
    }
    p{
      color: #fff;
    }
    
  }
.title{
  animate-duration: 5s;
  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
  animation-iteration-count: infinite;
  color: #1461FC;
  @media(max-width: 768px){
    font-size: 25px;
  }
}
  p{
    font-weight: 600;
    line-height: 2;
    color: #000;
  }
`

const VideoWrapper = styled.div``
