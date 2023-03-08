import React, { useRef, useState } from 'react'
import { IoSendOutline } from 'react-icons/io5'
import abtImg from '../../../assets/img/abt.jpg'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const ref = useRef();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm("service_ehwiotu", "template_qfgq37u", ref.current, "yjRBfZDrqI4T6bdNQ").then(res => {
            console.log("Res", res);
            setName("")
            setEmail("")
            setMessage("")
            
        }).catch(err => {
            console.log("Error", err.text)
        })
    }

    return (
        <div className="about__container _container _grid">
            <img src={abtImg} alt="" className="about__img" />
            <div className="about__data">
                <form ref={ref} onSubmit={sendEmail}>
                    <div className='form-group'>
                        <div className='input-group'>
                            <label className='input__label'>Nom de l'envoyeur</label>
                            <input value={name} onChange={(e)=> setName(e.target.value)} className="form-field" id='user_name' name='user_name' type="text" placeholder="Nom de l'envoyeur"></input>
                        </div>
                        {/**
                        <div className='input-group'>
                            <label className='input__label'>Sujet</label>
                            <input className="form-field" type="text" placeholder="Sujet"></input>
                        </div>
                        */}
                        <div className='input-group'>
                            <label className='input__label'>Adresse email</label>
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} className="form-field" id='user_email' name='user_email' type="email" placeholder="Adresse email"></input>
                        </div>

                        <div className='input-group'>
                            <label className='input__label'>Message</label>
                            <textarea value={message} onChange={(e)=> setMessage(e.target.value)} className="form-field" id="message" name="message" rows="4" cols="50"></textarea>
                        </div>

                    </div>
                    <div className="about__buttons">
                        <button type="submit" className="button button--flex">
                            Me contacter<IoSendOutline className="button__icon"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
