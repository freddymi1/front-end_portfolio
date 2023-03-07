import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import p1 from '../../../assets/img/portfolio1.jpg'

import RealisationsData from '../../../assets/json/Realisation.json'



import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
  } from 'swiper/core';
  
// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);
  



export default function Portfolio() {
    return (
        <div className="portfolio_content ">
            <Swiper 
                keyboard={true}
                grabCursor={true}
                spaceBetween= {48}
                pagination={{ 
                    clickable: true ,
                    dynamicBullets: true
                }} 
                breakpoints={{
                    568:{
                        slidesPerView:1
                    }
                }}
                className="portfolio__container _container swiper-container">
                {
                    RealisationsData.mesRealisations && RealisationsData.mesRealisations.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="portfolio__content _grid">
                            <img src={p1} alt="" className="portfolio__img" />
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">{item.project}</h3>
                                
                                <h4 className='qualification__title'>{item.label}</h4>
                                
                                <span className="qualification__subtitle">{item.societe}</span>
                                <ul className='tech_list'>
                                        {
                                            item.techno && item.techno.map((list, index) => (
                                                <li className="portfolio_item" key={index}>{ list }</li>
                                        ))
                                    }
                                </ul>
                                    <br />
                                    <br/>
                                <p className="portfolio__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt, quis qui fugiat dolorem ullam? Suscipit fugit maiores dolorum maxime!
                                </p>
                                <a href="#Detail" className="button button--flex button--small portfolio__button">
                                    Détail
                                    <IoArrowForward className="button__icon"/>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))
                }
                
                
            </Swiper>
        </div>
    )
}
