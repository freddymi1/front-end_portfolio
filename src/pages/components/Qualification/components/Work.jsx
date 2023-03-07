import React from 'react'
import { IoCalendarOutline } from 'react-icons/io5'

export default function Work() {
    return (
        <div>
            {/* ======CALIF 1 ====== */}
            <div className="qualification__data">
                
                <div>
                    <h3 className="qualification__title">Développeur React/Redux</h3>
                    <span className="qualification__subtitle">Talium France</span>
                    <div className="qualification__calendar">
                        <IoCalendarOutline className="calendar__icon"/>
                        Février 2022 - Juillet 2022
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
                    <h3 className="qualification__title">Développeur Front-end</h3>
                    <span className="qualification__subtitle">Ingenosya Madagascar</span>
                    <div className="qualification__calendar">
                        <IoCalendarOutline className="calendar__icon"/>
                        Février 2022 - ? 
                    </div>
                </div>
                
            </div>

            {/* ======CALIF 3 ====== */}
            <div className="qualification__data">
                 
                <div>
                    <h3 className="qualification__title">Développeur Full-stack JS</h3>
                    <span className="qualification__subtitle">Sayna Madagascar</span>
                    <div className="qualification__calendar">
                        <IoCalendarOutline className="calendar__icon"/>
                        2020 - 2022 
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
                    <h3 className="qualification__title">Technicien Informatique</h3>
                    <span className="qualification__subtitle">Atout Service</span>
                    <div className="qualification__calendar">
                        <IoCalendarOutline className="calendar__icon"/>
                        2018 - 2019
                    </div>
                </div>
                
            </div>

        </div>
    )
}
