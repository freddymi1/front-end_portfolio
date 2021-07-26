import React from 'react'
import { AiOutlineGithub, AiOutlineSend } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import {BiMouse} from 'react-icons/bi'
import {TiArrowDown} from 'react-icons/ti'
import { HashLink } from 'react-router-hash-link'


export default function Homepage() {
    return (
        <div className="home__container _container _grid">
            <div className="home__content _grid">
                <div className="home__social">
                    <a href="https://linkedin.com/" target="blank" className="home__social-icon">
                        <FaLinkedinIn/>
                    </a>
                    <a href="https://github.com/" target="blank" className="home__social-icon">
                        <AiOutlineGithub/>
                    </a>
                    <a href="https://facebook.com/" target="blank" className="home__social-icon">
                        <FaFacebookF/>
                    </a>
                </div>
                <div className="home__img">
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
                            <image className="home__blob-img" x="12" y="18" href="img/perfil.png"/>
                        </g>
                    </svg>
                </div>

                <div className="home__data">
                    <h1 className="home__title">Hi, i'm Freddy Michel</h1>
                    <h3 className="home__subtitle">Developpeur Full-Stack JavaScript</h3>
                    <p className="home__description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta adipisci maiores eum, nihil veritatis odio.
                    </p>
                    <HashLink to="#contact" className="button button--flex">
                        Contactez-moi <AiOutlineSend className="button__icon"/>
                    </HashLink>
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
