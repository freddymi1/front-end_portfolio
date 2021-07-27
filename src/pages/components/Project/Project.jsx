import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { HashLink } from 'react-router-hash-link'
import imgPro from '../../../assets/img/project.png'

export default function Project() {
    return (
        <div className="project__container _container _grid">
            <div className="project__data">
                <h2 className="project__title">Vous avez de projet a realise?</h2>
                <p className="project__description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quis, ducimus nobis ex cum laboriosam.
                </p>
                 <HashLink to="#contact" className="button button--flex button--white">
                    Contactez-moi <AiOutlineSend className="project__icon button__icon"/>
                 </HashLink>
            </div>
            <img src={imgPro} className="project__img" alt="" />
        </div>
    )
}
