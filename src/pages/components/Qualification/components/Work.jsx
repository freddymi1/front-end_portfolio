import React from 'react'
import { IoCalendarOutline } from 'react-icons/io5'

export default function Work() {
    return (
        <div>
            {/* ======CALIF 1 ====== */}
            <div className="qualification__data">
                <div></div>
                <div>
                    <span className="qualification__rounded"></span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">Developpeur Front-end</h3>
                    <span className="qualification__subtitle">Sayna Madagascar</span>
                    <div className="qualification__calendar">
                        <IoCalendarOutline className="calendar__icon"/>
                        2020 - ?
                    </div>
                </div>

               
                
            </div>

            {/* ======CALIF 2 ====== */}
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Technicien SAV</h3>
                    <span className="qualification__subtitle">SODIM</span>
                    <div className="qualification__calendar">
                        <IoCalendarOutline className="calendar__icon"/>
                        03/2020 - 04/2020 
                    </div>
                </div>
                <div>
                    <span className="qualification__rounded"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>

            <div className="qualification__data">
                <div></div>
                <div>
                    <span className="qualification__rounded"></span>
                    {/* <span className="qualification__line"></span> */}
                </div>
                <div>
                    <h3 className="qualification__title">Technicien en Informatique</h3>
                    <span className="qualification__subtitle">Atout-Serveice Madagascar</span>
                    <div className="qualification__calendar">
                        <IoCalendarOutline className="calendar__icon"/>
                        2018 - 2019 
                    </div>
                </div>
                
            </div>

        </div>
    )
}
