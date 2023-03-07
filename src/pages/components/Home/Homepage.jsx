import React from 'react'
import { AiOutlineGithub, AiOutlineSend } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import {BiMouse} from 'react-icons/bi'
import {TiArrowDown} from 'react-icons/ti'
import { HashLink } from 'react-router-hash-link'
import Typed from "react-typed"
import aboutImg from '../../../assets/cv/moncv.pdf'
import profil from '../../../assets/img/14.png'
import { GoCloudDownload } from 'react-icons/go'

export default function Homepage() {
    return (
        <div className="home__container _container _grid">
            <div className="home__content _grid">
                <div className="home__social">
                    <a href="https://www.linkedin.com/in/narisoa-harilala-freddy-michel-49aa031a1/" target="blank" className="home__social-icon">
                        <FaLinkedinIn/>
                    </a>
                    <a href="https://github.com/freddymi1" target="blank" className="home__social-icon">
                        <AiOutlineGithub/>
                    </a>
                    <a href="https://web.facebook.com/freddy.michel.395" target="blank" className="home__social-icon">
                        <FaFacebookF/>
                    </a>
                    
                </div>
                <div className="home__img">
                    <img src={profil} alt='profile' />
                    {/**
                    <svg className="home__blob" viewBox="0 0 200 187">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            <image className="home__blob-img" x="12" y="18" href={ profil} />
                        </g>
                    </svg>
                    */}
                </div>

                <div className="home__data">
                    <Typed className='home__title'
                        strings={[
                            "Bonjour,",
                            "Je suis Freddy Michel"
                        ]}
                        style={{fontWeight: "bold"}}
                        typeSpeed={250}
                        backSpeed={200}
                        loop
                    />


                    {/**
                        <br />

                    <Typed className='home__title'
                        strings={[
                            
                        ]}
                        style={{fontWeight: "bold"}}
                        typeSpeed={200}
                        backSpeed={150}
                        loop
                    />
                    */}


                    <br />
                    
                    <Typed className='home__subtitle'
                        strings={[
                            "Développeur Full-Stack JavaScript"
                        ]}
                        style={{fontWeight: "bold"}}
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                    />

                    <br />

                    <div style={{marginTop: "2rem"}}>
                    
                    </div>
                    
                    <Typed className='home__description'
                        strings={[
                            "je suis passionné par l informatique et la nouvelles technologies. J'aime relever de nouveaux défis."
                        ]}
                        style={{fontWeight: "normal"}}
                        typeSpeed={150}
                        backSpeed={100}
                        loop={false}
                    />
                   
                     
                    <br />
                    <div style={{marginTop: "2rem"}}>
                    
                    </div>                    
                    <div className='home__btn'>
                        <HashLink to="#contact" className="button button--flex">
                            Contactez-moi <AiOutlineSend className="button__icon"/>
                        </HashLink>
                        <a download="Freddy Michel CV" href={aboutImg} className="button button--flex">
                            Telecharger mon cv<GoCloudDownload className="button__icon"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="home__scroll">
                <HashLink to="#about" className="home__scroll-button button--flex">
                    <BiMouse className="home__scroll-mouse"/>
                    <span className="home__scroll-name">Allez vers le bas</span>
                    <TiArrowDown className="home__scroll-arrow"/>
                </HashLink>
            </div>
        </div>
    )
}
