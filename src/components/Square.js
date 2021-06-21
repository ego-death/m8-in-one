import React from 'react'
import './Board.css';

const Square = ({num, img}) => {
    if(img) {
    return (
        <div className={num%2?'lightsquare':'darksquare'} style={{backgroundImage: `url(pieces/${img}`}}>
        </div>
    )
    } else {
        return (
            <div className={num%2?'lightsquare':'darksquare'}>
            </div>
        )
    }
}

export default Square
    // {/* <img src={`pieces/${img}`} alt="" className='piece'/> */}
