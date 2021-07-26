import React, { useRef, useState } from 'react'
import { FaSwatchbook } from 'react-icons/fa'
import {MdKeyboardArrowDown} from 'react-icons/md'

export default function Designer() {
    const [active, setActive] = useState("")
    const [height, setHeight] = useState("0px")
    const [rotate, setRotate] = useState("accordion_icon")
    const content = useRef();

    function toggleAccordion(){
        setActive(active === "" ? "active" : "")
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotate(active === "active" ? "accordion_icon" : "accordion_icon rotate")
    }
    return (
        <div>
            <div className="skills_content">
                <div className="skills__header"  onClick={toggleAccordion}>
                    <FaSwatchbook className="skills__icon"/>
                    <div>
                        <h1 className="skills__title">Designer</h1>
                        {/* <span className="skills__subtitle">Environ 10 mois</span> */}
                    </div>
                    <MdKeyboardArrowDown className={`skills__arrow ${rotate}`}/>
                </div>
                <div ref={content} style={{maxHeight:`${height}`}} className="skills__list _grid accordion_content">
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Adobe illustrator</h3>
                            <span className="skills__number">70%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__ai"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Adobe photoshop</h3>
                            <span className="skills__number">75%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__ps"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__number">70%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__figma"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Adobe XD</h3>
                            <span className="skills__number">65%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__xd"></span>
                        </div>
                    </div>
                    
                </div>
            </div> 
        </div>
    )
}
