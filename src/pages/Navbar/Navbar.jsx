import { HashLink } from "react-router-hash-link";

import {FaRegUser} from 'react-icons/fa';
import {IoBriefcaseOutline, IoMoonOutline} from 'react-icons/io5';
import {AiOutlineHome, AiOutlineSend, AiOutlineCloseCircle, AiOutlineAppstore} from 'react-icons/ai';
import {BsImage} from 'react-icons/bs';
import {GiSkills} from 'react-icons/gi'
import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    
    const navMenu = document.getElementById('nav-menu');
    const navLink = document.querySelectorAll(".nav__link")

    const navLinkMenu = () => {
        const navMenu = document.getElementById('nav-menu');
        setIsOpen(false)
        navMenu.classList.remove('show__menu')
    }

    navLink.forEach(n=>n.addEventListener('click', navLinkMenu))

    const handleOpen = (e)=>{
        e.preventDefault()
        setIsOpen(true)
    }

    const handleClose = (e)=>{
        e.preventDefault()
        setIsOpen(false)
        navMenu.classList.remove('show__menu')
    }

    if(isOpen){
        navMenu.classList.add('show__menu')
    }

    const detectScroll = ()=>{
        const scrollUp = document.getElementById("header")
        if(window.scrollY >= 80){
            scrollUp.classList.add("headB")
        }else{
            scrollUp.classList.remove("headB")
        }
    }

    window.addEventListener('scroll', detectScroll)
    
    // DARK MODE

    const themeBtn = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'IoSunnyOutline'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')
    

    return(
        <header className="header" id="header">
            <nav className="_nav _container">
                <HashLink to="#" className="nav__logo">Freddy Michel</HashLink>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list _grid">
                        <li className="nav__item">
                            <HashLink to="#home" className="nav__link">
                                <AiOutlineHome className="nav__icon"/> Accueil
                            </HashLink>
                        </li>
                        <li className="nav__item">
                            <HashLink to="#about" className="nav__link">
                                <FaRegUser className="nav__icon"/> A propos
                            </HashLink>
                        </li> 
                        <li className="nav__item">
                            <HashLink to="#skills" className="nav__link">
                                <GiSkills className="nav__icon"/> Competences
                            </HashLink>
                        </li> 
                        <li className="nav__item">
                            <HashLink to="#qualification" className="nav__link">
                                <IoBriefcaseOutline className="nav__icon"/>Qualifications
                            </HashLink>
                        </li> 
                        <li className="nav__item">
                            <HashLink to="#portfolio" className="nav__link">
                                <BsImage className="nav__icon"/>Portfolio
                            </HashLink>
                        </li> 
                        <li className="nav__item">
                            <HashLink to="#contact" className="nav__link">
                                <AiOutlineSend className="nav__icon"/>Contact
                            </HashLink>
                        </li>    
                    </ul>
                    <AiOutlineCloseCircle className="nav__close" id="nav-close" onClick={(e)=>handleClose(e)}/>
                </div>
                <div className="nav__btns">
                    <IoMoonOutline className="change-theme" id="theme-button"/>
                    <div className="nav__toggle" id="nav-toggle" onClick={(e)=>handleOpen(e)}>
                        <AiOutlineAppstore/>
                    </div>
                </div>
            </nav>
        </header>
    )
}