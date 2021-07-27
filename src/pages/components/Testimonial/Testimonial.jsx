import React from 'react'
import { IoStarOutline } from 'react-icons/io5'
import t1 from '../../../assets/img/testimonial1.jpg'
import t2 from '../../../assets/img/testimonial2.jpg'
import t3 from '../../../assets/img/testimonial3.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
  } from 'swiper/core';
  
// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

export default function Testimonial() {
    return (
        <Swiper 
            loop={true}
            grabCursor={true}
            spaceBetween= {48}
            pagination={{ 
                clickable: true ,
                dynamicBullets: true
            }} 
            breakpoints={{
                568:{
                    slidesPerView:3
                }
            }}
            className="testimonial__container _container swiper-container">
            <div className="swiper-wrapper">
                {/* ---==========TESTIMONIAL 1===========------- */}
                <SwiperSlide>
                    <div className="testimonial__content swiper-slide">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={t1} alt="" className="testimonial__img" />
                                <div>
                                    <h3 className="testimonial__name">Sara Smith</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                            </div>
                            <div>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                            </div>
                        </div>
                        <p className="testimonial__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus voluptatum aspernatur quasi pariatur id veniam?
                        </p>
                    </div>
                </SwiperSlide>

                {/* ---==========TESTIMONIAL 2===========------- */}
                <SwiperSlide>
                    <div className="testimonial__content swiper-slide">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={t2} alt="" className="testimonial__img" />
                                <div>
                                    <h3 className="testimonial__name">Alexia</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                            </div>
                            <div>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                            </div>
                        </div>
                        <p className="testimonial__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus voluptatum aspernatur quasi pariatur id veniam?
                        </p>
                    </div>
                </SwiperSlide>

                {/* ---==========TESTIMONIAL 3===========------- */}
                <SwiperSlide>
                    <div className="testimonial__content swiper-slide">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={t3} alt="" className="testimonial__img" />
                                <div>
                                    <h3 className="testimonial__name">John Doe</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                            </div>
                            <div>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                                <IoStarOutline className="testimonial__icon-start"/>
                            </div>
                        </div>
                        <p className="testimonial__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus voluptatum aspernatur quasi pariatur id veniam?
                        </p>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    )
}
