import React from 'react'
import {GoCloudDownload} from 'react-icons/go'

import aboutImg from '../../../assets/cv/moncv.pdf'
import abtImg from '../../../assets/img/abt.jpg'

export default function About() {
    return (
        <div className="about__container _container _grid">
            
            <div className="about__data">
                <p className="about__description">
                    Titulaire de diplôme de Licence professionnel et de Diplôme

                    Technicien supérieur en Informatique Gestion. Développeur Full-
                    Stack, Javascript(React - Angular - Ionic - VueJS / NodeJS) et

                    PHP(Laravel - Symfony). Apres, developpeur React Redux chez
                    TALIUM France pour la developpement de plateforme de tokenisation
                    de la société pendant 5 mois. Je suis chez INGENOSYA Madagascar en
                    ce moment en tant que developpeur React/Symfony, dynamique,
                    sociable, rigoureux. J'aime relever le nouveau défi.
                </p>
                <div className="about__info">
                    <div>
                        <span className="about__info-title">02+</span>
                        <span className="about__info-name">Année <br/> d'experience</span>
                    </div>
                    <div>
                        <span className="about__info-title">05+</span>
                        <span className="about__info-name">Projet <br/> réalisés</span>
                    </div>
                    <div>
                        <span className="about__info-title">03+</span>
                        <span className="about__info-name">Société <br/> travaillé</span>
                    </div>
                </div>
                <div className="about__buttons">
                    <a download="Freddy Michel CV" href={aboutImg} className="button button--flex">
                        Telecharger mon cv<GoCloudDownload className="button__icon"/>
                    </a>
                </div>
            </div>
            <img src={abtImg} alt="" className="about__img" />
        </div>
    )
}
