import React from 'react'
import ReactLoading from 'react-loading';
export default function LoadingComponent() {
    const type = "spokes";
    const color = "hsl(var(--hue-color), 62%, 28%)";
    
    return (
    <div className='__container'>
        <ReactLoading type={type} color={color} height={'10%'} width={'10%'} />
    </div>
  )
}
