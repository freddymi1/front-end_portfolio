import React from 'react'
import { useState } from 'react'
import { IoBriefcaseOutline, IoSchoolOutline } from 'react-icons/io5'
import Education from './components/Education'
import Work from './components/Work'

export default function Qualification() {

    const [show, setShow] = useState(true)
    const [show0, setShow0] = useState(false)

    const showTab = (e)=>{
        e.preventDefault()
        setShow(true)
        setShow0(false)
    }
    const showTab0 = (e)=>{
        e.preventDefault()
        setShow(false)
        setShow0(true)
    }
        

    return (
        <div className="qualification__container _container _grid">
            <div className="qualification__tabs">
                <div className={show ? `qualification__button button--flex active`: `qualification__button button--flex`} onClick={(e)=>showTab(e)}>
                    <IoSchoolOutline className="qualification__icon"/>
                    Educations
                </div>
                <div className={show0 ? `qualification__button button--flex active`: `qualification__button button--flex`} onClick={(e)=>showTab0(e)}>
                    <IoBriefcaseOutline className="qualification__icon"/>
                    Experiences
                </div>
            </div>
            <div className="qualification__sections">
                {
                    show && (
                        <div className="qualification__content qualification__active">
                            <Education/>
                        </div>
                    )
                }
                {
                    show0 && (
                        <div className="qualification__content qualification__active">
                            <Work/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
