import ProgressBar from '@ramonak/react-progress-bar'
import React, { useRef, useState } from 'react'
import {BiCodeCurly} from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import frontEndData from '../../../../assets/json/ForntEnd.json'
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
                        <h1 className="skills__title">Front-end</h1>
                        {/* <span className="skills__subtitle">Environ 1 an</span> */}
                    </div>
                    <MdKeyboardArrowDown className={`skills__arrow ${rotate}`}/>
                </div>
                <div ref={content} style={{ maxHeight: `${height}` }} className="skills__list _grid accordion_content">
                    {
                        frontEndData.frontend && frontEndData.frontend.map(list => (
                            <div key={list.id} className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">{list.label}</h3>
                                </div>
                                <ProgressBar
                                        animateOnRender={true}
                                        completed={list.completed}
                                        height="10px"
                                        labelClassName="label"
                                        bgColor='hsl(var(--hue-color), 69%, 61%)'
                                    />
                            </div>
                        ))
                    }
                    

                </div>
            </div>
        </div>
    )
}
