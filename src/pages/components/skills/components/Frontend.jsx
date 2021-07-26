import React, { useRef, useState } from 'react'
import {BiCodeCurly} from 'react-icons/bi'
import {MdKeyboardArrowDown} from 'react-icons/md'
export default function Frontend() {
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
            <div className="skills_content ">
                <div className="skills__header"  onClick={toggleAccordion}>
                    <BiCodeCurly className="skills__icon"/>
                    <div>
                        <h1 className="skills__title">Developpeur Front-end</h1>
                        {/* <span className="skills__subtitle">Environ 1 an</span> */}
                    </div>
                    <MdKeyboardArrowDown className={`skills__arrow ${rotate}`}/>
                </div>
                <div ref={content} style={{maxHeight:`${height}`}} className="skills__list _grid accordion_content">
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__number">90%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__html"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__number">85%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__css"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__number">70%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__js"></span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">ReactJS</h3>
                            <span className="skills__number">75%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__react"></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Angular</h3>
                            <span className="skills__number">60%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__ng"></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Ionic</h3>
                            <span className="skills__number">60%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__ionic"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
