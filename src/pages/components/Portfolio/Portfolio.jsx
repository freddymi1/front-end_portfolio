import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import p1 from '../../../assets/img/portfolio1.jpg'
import p2 from '../../../assets/img/portfolio2.jpg'
import p3 from '../../../assets/img/portfolio3.jpg'
export default function Portfolio() {
    return (
        <div className="portfolio__container _container _swipe-container">
            <div className="swiper-wrapper">
                <div className="portfolio__content _grid swiper-slide">
                    <img src={p1} alt="" className="portfolio__img" />
                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Site web moderne</h3>
                        <p className="portfolio__description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt, quis qui fugiat dolorem ullam? Suscipit fugit maiores dolorum maxime!
                        </p>
                        <a href="#Detail" className="button button--flex button--small portfolio__button">
                            Demo
                            <IoArrowForward className="button__icon"/>
                        </a>
                    </div>
                </div>
                <div className="portfolio__content _grid swiper-slide">
                    <img src={p2} alt="" className="portfolio__img" />
                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Ui/Ux Design</h3>
                        <p className="portfolio__description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt, quis qui fugiat dolorem ullam? Suscipit fugit maiores dolorum maxime!
                        </p>
                        <a href="#Detail" className="button button--flex button--small portfolio__button">
                            Demo
                            <IoArrowForward className="button__icon"/>
                        </a>
                    </div>
                </div>
                <div className="portfolio__content _grid swiper-slide">
                    <img src={p3} alt="" className="portfolio__img" />
                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Application mobile</h3>
                        <p className="portfolio__description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt, quis qui fugiat dolorem ullam? Suscipit fugit maiores dolorum maxime!
                        </p>
                        <a href="#Detail" className="button button--flex button--small portfolio__button">
                            Demo
                            <IoArrowForward className="button__icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
