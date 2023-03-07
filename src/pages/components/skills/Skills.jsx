import React from 'react'
import Backend from './components/Backend'
import Database from './components/Database'
import Designer from './components/Designer'
import Frontend from './components/Frontend'
import Mobile from './components/Mobile'
import OtherTech from './components/OtherTech'

export default function Skills() {

    

    return (
        <div className="skills__container _container">
            
            <div className='_grid_'>
                <div style={{width: "100%"}}>
                    {/* Skills 1 */}
                    <Frontend/>
                    {/* Skills 2 */}
                    <Backend />
                    
                    {/* Skills 3 */}
                    <OtherTech/>

                </div>
                <div style={{width: "100%"}}>
                    {/* Skills 3 */}
                        <Designer/>
                    {/* Skills 4 */}
                    <Database />
                    
                    {/*Skills 5 */}
                    <Mobile/>
                </div>
            </div>
            
    
        </div>
    )
}
