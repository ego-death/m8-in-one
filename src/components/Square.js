import React from 'react'
import './Square.css';

const Square = ({num, img}) => {
    if(img) {
    return (
        <div className={num%2?'darksquare chess-piece tile':'lightsquare chess-piece tile'} style={{backgroundImage: `url(pieces/${img}`}}>
        </div>
    )
    } else {
        return (
            <div className={num%2?'darksquare tile':'lightsquare tile'}>
            </div>
        )
    }
}

export default Square