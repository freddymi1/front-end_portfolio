import React from 'react'
import { IoCalendarOutline } from 'react-icons/io5'

export default function Education() {
    return (
        <>
            {/* ======CALIF 1 ====== */}
            <div className="qualification__data">
                
                <div>
                    <h3 className="qualification__title">Licence professionnel</h3>
                    <span className="qualification__subtitle">Universite GSI Madagascar</span>
                    <div className="qualification__calendar">
                        <IoCalendarOutline className="calendar__icon"/>
                        2016 - 2017
                    </div>
                </div>

                <div>
                    <span className="qualification__rounded"></span>
                    <span className="qualification__line"></span>
                </div>
                
            </div>

            {/* ======CALIF 2 ====== */}
            <div className="qualification__data">
                <div></div>
                <div>
                    <span className="qualification__rounded"></span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">Diplome de Technicien Superieur</h3>
                    <span className="qualification__subtitle">Universite GSI Madagascar</span>
                    <div className="qualification__calendar">
                        <IoCalendarOutline className="calendar__icon"/>
                        2013 - 2015 
                    </div>
                </div>
                
            </div>

            {/* ======CALIF 3 ====== */}
            <div className="qualification__data">
                 
                <div>
                    <h3 className="qualification__title">Baccalaureat serie D</h3>
                    <span className="qualification__subtitle">Lycee Faratsiho</span>
                    <div className="qualification__calendar">
                        <IoCalendarOutline className="calendar__icon"/>
                        2009 - 2012 
                    </div>
                </div>
                <div>
                    <span className="qualification__rounded"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>

            {/* ======CALIF 3 ====== */}
            <div className="qualification__data">
                 <div></div>
                 <div>
                    <span className="qualification__rounded"></span>
                    {/* <span className="qualification__line"></span> */}
                </div>
                <div>
                    <h3 className="qualification__title">BEPC</h3>
                    <span className="qualification__subtitle">CEG Ramainandro - Faratsiho</span>
                    <div className="qualification__calendar">
                        <IoCalendarOutline className="calendar__icon"/>
                        2005 - 2009
                    </div>
                </div>
                
            </div>
        </>
    )
}
