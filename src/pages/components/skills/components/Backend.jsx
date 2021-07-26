import React, { useRef, useState } from 'react'
import { AiOutlineCloudServer } from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'

export default function Backend() {
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
                    <AiOutlineCloudServer className="skills__icon"/>
                    <div>
                        <h1 className="skills__title">Developpeur Back-end</h1>
                        {/* <span className="skills__subtitle">Environ 5 mois</span> */}
                    </div>
                    <MdKeyboardArrowDown className={`skills__arrow ${rotate}`}/>
                </div>
                <div ref={content} style={{maxHeight:`${height}`}} className="skills__list _grid accordion_content">
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">NodeJS</h3>
                            <span className="skills__number">60%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__node"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__number">45%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__php"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__number">40%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__java"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__number">55%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__python"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Wordpress</h3>
                            <span className="skills__number">60%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__wp"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Prestashop</h3>
                            <span className="skills__number">65%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__prs"></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
