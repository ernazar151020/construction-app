import React from 'react'
import styled from "styled-components"
import {headerLinksData} from "../Header/HeaderLinksData";
import {Link} from "react-router-dom";
import {useLanguageContext} from "../../context/Context";


const Sidebar = ({isSidebarOpen, openSidebar}) => {
	const {checkLanguage} = useLanguageContext()

	return (
		<Wrapper>
			{
				headerLinksData.map((item) => {
					return <li key={item.id} onClick={openSidebar}>
						<Link to={`${item.link}`}>{checkLanguage(item).text}</Link>
					</li>
				})
			}
		</Wrapper>
	)
}

export default Sidebar

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    margin: 7px 0;
border-bottom: 1px solid #fff;
  }

  a {
     font-size: 16px;
    color: #fff;
    font-weight: 500;
    
  }
`
