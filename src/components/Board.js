import React from 'react'
import Square from './Square';
import './Board.css';

const Board = () => {
    let board = [];
    // let rank = [8,7,6,5,4,3,2,1];
    // let file = ['a','b','c','d','e','f','g','h'];
    let pieces = [];
    pieces.push({image: 'b_pawn.png', x: 1, y: 0})
    for(let i=0;i<8;++i) {
        for(let j=0;j<8;++j) {
            let hasRendered = false;
            let key = i.toString()+j.toString();
            for(const piece of pieces) {
                if (piece.x === i && piece.y === j) {
                    board.push(<Square key={key} num={i+j+2} img={piece.image}/>);
                    hasRendered = true;
                    break;
                }
            }
            if(!hasRendered) {
                board.push(<Square key={key} num={i+j+2} img={null}/>);
            }
        }
    }
    return (
        <div className='board'>
            {board}
        </div>
    )
}

export default Board
