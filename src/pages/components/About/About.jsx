import React from 'react'
import {GoCloudDownload} from 'react-icons/go'

import aboutImg from '../../../assets/cv/moncv.pdf'

export default function About() {
    return (
        <div className="about__container _container _grid">
            <img src="img/about.jpg" alt="" className="about__img" />
            <div className="about__data">
                <p className="about__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam ex porro sit temporibus quis, officia, id ea accusamus cupiditate repellendus voluptatem. Qui maiores, inventore quae in sed ipsa odio.
                </p>
                <div className="about__info">
                    <div>
                        <span className="about__info-title">08+</span>
                        <span className="about__info-name">Annee <br/> d'experience</span>
                    </div>
                    <div>
                        <span className="about__info-title">05+</span>
                        <span className="about__info-name">Projet <br/> complet</span>
                    </div>
                    <div>
                        <span className="about__info-title">03+</span>
                        <span className="about__info-name">Societe <br/> travaille</span>
                    </div>
                </div>
                <div className="about__buttons">
                    <a download="Freddy Michel CV" href={aboutImg} className="button button--flex">
                        Telecharger mon cv<GoCloudDownload className="button__icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
