import React from 'react';
import Hints from './Hints';
import Cell from './Cell';

export default (props) => {

  const renderCell = (cell) => {
    return (
      <Cell 
        key={`${cell.i}-${cell.j}`}
        cell={cell}
        cellClickHandler={props.cellClickHandler}/>
    )
  }

  const renderRow = (row, i) => {
    return (
      <div key={i} className="row">
        { row.map(cell => renderCell(cell)) }
      </div>
    )
  }

  const renderBoard = () => {
    const { board } = props;
    if (!board || !board.length) {
      return;
    }
    return board.map((row, i) => {
      return renderRow(row, i);
    });
  }

  return (
    <div className="board">
      <Hints position="top" board={props.board} difficulty={props.difficulty} />  
      <div className="board-and-left">
        <Hints position="left" board={props.board} difficulty={props.difficulty} />
        <div className="board">
          {renderBoard()}
        </div>  
      </div>
    </div>
  );
}