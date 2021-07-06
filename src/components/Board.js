import React from 'react'
import Square from './Square';
import Fxn from './BoardFunctions.js';
import './Board.css';

const Board = () => {
    let board = [];
    // let rank = [8,7,6,5,4,3,2,1];
    // let file = ['a','b','c','d','e','f','g','h'];
    let pieces = [];
    //generate black pieces
    for(let i=0;i<8;++i) { //pawns
        pieces.push({image: 'b_pawn.png', x: 1, y: i})
    }
    pieces.push({image: 'b_rook.png', x: 0, y: 0});
    pieces.push({image: 'b_rook.png', x: 0, y: 7}); //rooks
    pieces.push({image: 'b_knight.png', x: 0, y: 1});
    pieces.push({image: 'b_knight.png', x: 0, y: 6}); //knights 
    pieces.push({image: 'b_bishop.png', x: 0, y: 2});
    pieces.push({image: 'b_bishop.png', x: 0, y: 5}); //bishop 
    pieces.push({image: 'b_queen.png', x: 0, y: 3}); //queen
    pieces.push({image: 'b_king.png', x: 0, y: 4}); //king
    //generate white pieces
    for(let i=0;i<8;++i) {
        pieces.push({image: 'w_pawn.png', x: 6, y: i})
    }
    pieces.push({image: 'w_rook.png', x: 7, y: 0});
    pieces.push({image: 'w_rook.png', x: 7, y: 7}); 
    pieces.push({image: 'w_knight.png', x: 7, y: 1});
    pieces.push({image: 'w_knight.png', x: 7, y: 6}); 
    pieces.push({image: 'w_bishop.png', x: 7, y: 2});
    pieces.push({image: 'w_bishop.png', x: 7, y: 5}); 
    pieces.push({image: 'w_queen.png', x: 7, y: 3});
    pieces.push({image: 'w_king.png', x: 7, y: 4}); 
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
        <div className='board' onMouseDown={Fxn.check}>
            {board}
        </div>
    )
}

export default Board
