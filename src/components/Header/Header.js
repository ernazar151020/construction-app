import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom";
import {headerLinksData} from "./HeaderLinksData";
import {useLanguageContext} from "../../context/Context";
import {AiOutlineCloseCircle, BsBuilding, GiHamburgerMenu} from "react-icons/all";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
	const {switchLang, language, checkLanguage} = useLanguageContext()
	const [className, setClassName] = useState("")
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const openSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	const changeHeaderBackground = () => {
		if (window.pageYOffset > 0) {
			if (!className) {
				setClassName("active-on-scroll");
			}
		} else {

			setClassName("");
		}
	}
	useEffect(() => {
		window.addEventListener("scroll", changeHeaderBackground)

	}, [])


	return (
		<HeaderWrapper className={className}>
			<div className="container">
				<div className="header_content">
					<LogoWrapper to={"/"}>
						{/*<img src={Logo} alt=""/>*/}
						<BsBuilding/>
					</LogoWrapper>
					<BurgerWrapper>
						{
							isSidebarOpen ? <AiOutlineCloseCircle onClick={openSidebar}/> :
								<GiHamburgerMenu onClick={openSidebar}/>
						}
					</BurgerWrapper>
					<HeaderLinksWrapper>
						{
							headerLinksData.map((item) => {
								return <li key={item.id}>
									<Link to={`${item.link}`}>{checkLanguage(item).text}</Link>
								</li>
							})
						}

					</HeaderLinksWrapper>
					<HeaderContacts>
						<div className="phone_numbers">
							<a href="tel:0706944347">0706944347</a>
							<a href="tel:0706944347">0706944347</a>
						</div>
						<ul className="language">
							<li onClick={() => switchLang('kg')} className={language === "kg" && "active_kg"}>
								<span><img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Kyrgyzstan_%283-2%29.svg/1200px-Flag_of_Kyrgyzstan_%283-2%29.svg.png"
									alt=""/>
								</span>КЫ
							</li>
							<li onClick={() => switchLang('ru')} className={language === "ru" && "active_ru"}>
								<span><img
									src="https://phonoteka.org/uploads/posts/2021-04/1619682784_9-phonoteka_org-p-fon-rossiiskii-flag-dlya-fotoshopa-9.jpg"
									alt=""/>
								</span>РУ
							</li>

						</ul>
					</HeaderContacts>
				</div>
				{
					isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} openSidebar={openSidebar}/>

				}
			</div>
		</HeaderWrapper>
	)
}

export default Header

const HeaderWrapper = styled.header`

  background: #000;
  background: rgba(34, 100, 200, 0.5);

  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;

  @media (max-width: 768px) {
    background: #1461FC;
  }

  .header_content {
    display: flex;
    align-items: center;
    height: 90px;
    justify-content: space-between;
  }
`

const LogoWrapper = styled(Link)`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
  }

  svg {
    font-size: 50px;
    color: #fff;
    animation: jello; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 4s;
    animation-iteration-count: infinite;
    transition: all 0.3s ease;

    :hover {
      color: red;
    }
  }
`

const HeaderLinksWrapper = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }

  li {
    margin: 0 10px;
    transition: all 0.3s ease;

    :hover {
      a {
        color: red;

      }
    }
  }

  a {
    transition: all 0.3s ease;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
  }
`
const HeaderContacts = styled.div`
  display: flex;
  align-items: center;

  .phone_numbers {
    margin-right: 10px;
    @media (max-width: 500px) {
      display: none;
    }

    a {
      display: block;
      color: #fff;
      line-height: 20px;

      :hover {
        text-decoration: underline;
      }
    }
  }

  .language {
    margin-left: 10px;

    li {
      color: #fff;
      cursor: pointer;
      margin-bottom: 5px;
      font-weight: 600;
      display: flex;
      align-items: center;
      padding: 3px;
      border-radius: 5px;

      img {
        width: 30px;
        height: 20px;
        margin-top: 5px;
        //border-radius: 50%;
        margin-right: 5px;
      }
    }

    .active_ru {
      color: #1461FC;
      background: #fff;
    }

    .active_kg {
      color: #1461FC;
      background: #fff;
    }
  }

`

const BurgerWrapper = styled.div`
  display: none;

  svg {
    color: #fff;
    font-size: 40px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    position: absolute;
    left: 45%;
    display: block;
  }
`
