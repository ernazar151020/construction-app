import React from 'react'
import styled from "styled-components"
import {SRLWrapper} from "simple-react-lightbox";
import {useLanguageContext} from "../../context/Context";


const GalleryBigTable = () => {

    const {smallTableView ,setFilteredImages , filteredImages , images } = useLanguageContext()

    return (
        <Wrapper>
            <GalleryContent>
                <div className="images">
                    <SRLWrapper >
                        {
                            filteredImages.map((item,index)=>{
                                return <img key={index} src={item.url} alt=""/>

                            })
                        }
                    </SRLWrapper>
                </div>

            </GalleryContent>
        </Wrapper>
    )
}

export default GalleryBigTable

const Wrapper = styled.div`

`

const GalleryContent = styled.div`
  margin-top: 20px;
	.images{
        animate-duration: 5s;
        animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 0.5s;
        
	  div{
        display: grid;
        grid-template-columns:repeat(auto-fit , minmax(250px , 1fr));
        grid-gap: 20px;
          margin: 0 auto;
          justify-content: center;
      }
	  img{
          margin: 0 auto;
	    max-width: 300px;
	    width: 100%;
	    cursor: pointer;
          border-radius: 10px;
          transition: all 0.3s ease-in;

          :hover {
              transform: scale(1.1);
              box-shadow: 5px 5px 15px 0px #000000;
          }
	  }
	}
`
