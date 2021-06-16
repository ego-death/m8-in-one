import React from 'react'
import './Board.css';

const Board = () => {
    let board = [];
    let rank = [8,7,6,5,4,3,2,1];
    let file = ['a','b','c','d','e','f','g','h'];
    for(let i=0;i<8;++i) {
        for(let j=0;j<8;++j) {
            board.push(`[${file[j]}${rank[i]}] `);
        }
    }
    return (
        <div className='board'>
            {board.map((el,i)=>{
            if(Number(el[2]) % 2) {
            return (<div className={i%2?'lightsquare':'darksquare'}>{el}</div>)
            } else {
            return (<div className={i%2?'darksquare':'lightsquare'}>{el}</div>)
            }
        })}
        </div>
    )
}

export default Board
