import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Homepage from './components/Home/Homepage'
import Portfolio from './components/Portfolio/Portfolio'
import Qualification from './components/Qualification/Qualification'
import Skills from './components/skills/Skills'
import NavBar from './Navbar/Navbar'
import bgImage from '../assets/bg/home.jpg'
import FooterComponent from './components/Footer/FooterComponent'
import LoadingComponent from './components/LoadingComponent/LoadingComponent'
export default function MainPage() {

    const [background, setBg] = useState("") 

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const detectScroll = ()=>{
        const scrollUp = document.getElementById("scroll-up")
        if(window.scrollY >= 560){
            scrollUp.classList.add("show__scrollUp")
        }else{
            scrollUp.classList.remove("show__scrollUp")
        }
    }

    const toggleBtn = (e) => {
        setBg("black")
        localStorage.setItem('bg', background)
    }

    window.addEventListener('scroll', detectScroll)
    return (
        <>
            {
                loading ? (
                    <LoadingComponent/>
                ) : (
                    <>
                        <div style={{
                        backgroundImage: 
                            `url(${bgImage})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundClip: 'content-box'
                        }}>
                            <NavBar bg={ background } action={toggleBtn} />
                            <main className="main">
                                <section className="home section" id="home" style={{
                                    backgroundImage: `url(${bgImage})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    paddingBottom: '0px'
                                }}>
                                    <Homepage/>
                                </section>
                                <section className="about section" id="about">
                                    <h2 className="section__title">A propos de moi</h2>
                                    <span className="section__subtitle">Mon introduction</span>
                                    <About/>
                                </section>
                                <section className="skills section" id="skills">
                                    <h2 className="section__title">Mes competences</h2>
                                    <span className="section__subtitle">Mes technologies</span>
                                    <Skills />
                                </section>
                                <section className="qualification section" id="qualification">
                                    <h2 className="section__title">Mes qualifications</h2>
                                    <span className="section__subtitle">Experiences et Formations</span>
                                    <Qualification/>
                                </section>
                                <section className="portfolio section" id="portfolio">
                                    <h2 className="section__title">Mes réalisations</h2>
                                    <span className="section__subtitle">Mes differentes realisations</span>
                                    <Portfolio/>
                                </section>
                                {/**
                                <section className="project section">
                                    <div className="project__bg">
                                        <Project/>
                                    </div>
                                </section> 
                                */}
                                
                                {/**
                                <section className="testimonial section">
                                    <h2 className="section__title">Recommendations</h2>
                                    <span className="section__subtitle">Recommendation des clients</span>
                                    <Testimonial/>
                                </section>
                                */}
                                
                                <section className="contact section" id="contact">
                                    <h2 className="section__title">Me contactez</h2>
                                    <span className="section__subtitle">Si vous avez besoin des info? Contactez-moi.</span>
                                    <Contact/>
                                </section>
                            </main>
                            <footer className='__footer'>
                                <FooterComponent/>
                            </footer>
                            <a href="#home" className="scrollup" id="scroll-up">
                                <FaArrowUp className="scrollup__icon"/>
                            </a>
                        </div>
                    </>
                )
            }
        </>
    )
}
