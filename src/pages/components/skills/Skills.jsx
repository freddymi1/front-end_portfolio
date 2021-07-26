import React from 'react'
import Backend from './components/Backend'
import Database from './components/Database'
import Designer from './components/Designer'
import Frontend from './components/Frontend'

export default function Skills() {

    

    return (
        <div className="skills__container _container _grid">
            <div>
                {/* Skills 1 */}
                    <Frontend/>
                {/* Skills 2 */}
                    <Backend/>

            </div>
            <div>
                {/* Skills 3 */}
                    <Designer/>
                {/* Skills 4 */}
                    <Database/>
            </div>
    
        </div>
    )
}
