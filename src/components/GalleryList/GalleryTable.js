import React from 'react'
import styled from "styled-components"
import {SRLWrapper} from "simple-react-lightbox";
import {useLanguageContext} from "../../context/Context";


const GalleryTable = () => {

	const {smallTableView, setFilteredImages, filteredImages, images} = useLanguageContext()

	return (
		<Wrapper>
			<GalleryContent>
				<div className="images">
					<SRLWrapper>
						{
							filteredImages.map((item, index) => {
								return <img key={index} src={item.url} alt=""/>

							})
						}
					</SRLWrapper>
				</div>

			</GalleryContent>

		</Wrapper>
	)
}

export default GalleryTable

const Wrapper = styled.div`

`

const GalleryContent = styled.div`
  margin-top: 20px;

  .images {
    animate-duration: 5s;
    animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 0.5s;
    //animation-iteration-count: infinite;
    div {
      display: grid;
      grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));
      grid-gap: 20px;
      @media(max-width: 768px){
        grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));
      }
    }

    img {
      max-width: 300px;
      width: 100%;
      cursor: pointer;
      border-radius: 10px;
      transition: all 0.3s ease-in;

      :hover {
        transform: scale(1.1);
        box-shadow: 5px 5px 15px 0px #000000;
      }

      //height: 100px;
    }
  }
`
