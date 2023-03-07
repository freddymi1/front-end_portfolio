import React from 'react'
import { IoSendOutline } from 'react-icons/io5'
import aboutImg from '../../../assets/cv/moncv.pdf'
import abtImg from '../../../assets/img/abt.jpg'
export default function Contact() {
    return (
        <div className="about__container _container _grid">
            <img src={abtImg} alt="" className="about__img" />
            <div className="about__data">
                <div className='form-group'>
                    <div className='input-group'>
                        <label className='input__label'>Nom de l'envoyeur</label>
                        <input className="form-field" type="text" placeholder="Nom de l'envoyeur"></input>
                    </div>
                    <div className='input-group'>
                        <label className='input__label'>Sujet</label>
                        <input className="form-field" type="text" placeholder="Sujet"></input>
                    </div>
                    <div className='input-group'>
                        <label className='input__label'>Adresse email</label>
                        <input className="form-field" type="email" placeholder="Adresse email"></input>
                    </div>

                    <div className='input-group'>
                        <label className='input__label'>Message</label>
                        <textarea className="form-field" id="message" name="message" rows="4" cols="50"></textarea>
                    </div>

                </div>
                <div className="about__buttons">
                    <a download="Freddy Michel CV" href={aboutImg} className="button button--flex">
                        Me contacter<IoSendOutline className="button__icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
