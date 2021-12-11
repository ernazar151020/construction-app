import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import {useTranslation} from "react-i18next";
import {Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import {projectsData} from "../Projects/ProjectsData";


const ProjectsInMap = () => {
	const [allMapsAddress, setAllMapsAddress] = useState(projectsData)


	// useEffect(() => {
	// 	setAllMapsAddress(projectsData)
	// },[])

	const {t} = useTranslation()
	
	return (
		<Wrapper>
			<div className="container">
				<h1 className="title">{t("Обьекты на карте")}</h1>
				<MapContent>
					<YMaps>
						<div className="map">
							<Map defaultState={{center: [42.878645, 74.616205], zoom: 10}}
							     options={{suppressMapOpenBlock: true}} width={'100%'} height={'100%'}
							     modules={['templateLayoutFactory', 'layout.ImageWithContent']}>

								<ZoomControl
									options={{float: 'left', size: 'small', position: {bottom: 0}}}/>

								{
									allMapsAddress.map((el, index) => {
										return <Placemark key={index}
										                  options={{
											                  iconLayout: "default#image",
											                  iconImageHref: el.image,
											                  iconImageSize: [60, 60],
											                  iconImageOffset: [-10, -10],
											                  iconCaption: el.name,
										                  }}
										                  geometry={[el.longitude, el.latitude]}
										                  properties={{
											                  hintContent: `<p><strong>${el?.name}</strong> <br/> <small>${el?.address}</small></p> `,
										                  }}
										                  modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}

										/>
									})
								}
							</Map>
						</div>
					</YMaps>
				</MapContent>
			</div>
		</Wrapper>
	)
}

export default ProjectsInMap

const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  //background: #ccc;
  //height: 100vh;

  .title {
    line-height: 2;
    color: #1461FC;
  }
`

const MapContent = styled.div`
  height: 100%;
  height: 500px;
  @media(max-width: 768px){
    height: 350px;
  }
}

  .map {
    height: 100%;


    .map {
      width: 60vw !important;
      height: 65vh !important;
    }

    .ymaps-2-1-79-float-button {
      background: #1862AF;
      border-radius: 0px 4.08305px 0px 0px;
    }

    .ymaps-2-1-79-float-button-icon {
      color: white;
    }

    @media screen and (max-width: 1024px) {
      .map {
        height: 100vh !important;
      }
    }
    @media screen and (max-width: 768px) {
      .map {
        height: 40% !important;
        width: 90vw !important;
        margin: 0 auto !important;
        margin-bottom: 30px;
      }

    }
`
