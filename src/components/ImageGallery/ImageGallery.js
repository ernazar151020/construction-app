import React, {useState} from 'react'
import styled from 'styled-components'

const ImageGallery = ({images = []}) => {
	const [main, setMain] = useState(images[0])
	

	return <Wrapper>
		<div className = "gallery_body">
			<div className = "gallery_image">
				<img src={main?.url ? main?.url:images[0]?.url  } className="main" alt=""/>
				<div className="gallery">
					{
						images.map((item, index) => {
							return <img src={item?.url} alt="" key={index} onClick={() => setMain(images[index])}
							            className={`${item?.url === main?.url ? "active" : null}`}/>
						})
					}
				</div>
			</div>
			<div className = "gallery_content">
			
			</div>
		
		</div>
	
	</Wrapper>
}

const Wrapper = styled.section`

  .main {
    height: 500px;
  }

  img {
    width: 100%;
    display: block;
    border-radius: 8px;
    object-fit: cover;
  }

  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;

    img {
      height: 100px;
      cursor: pointer;
    }
  }

  .active {
    box-shadow: 0px 0px 0px 2px #ffc222;
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }

    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
      object-fit: cover;
    }

    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ImageGallery
