import React from 'react';
import { getBoardSizeByDifficulty, getHintsArrFromCellsArr } from '../services/common_methods';

export default (props) => {

  const renderHints = () => {
    const { board, difficulty, position } = props;
    if (!board || !board.length) {
      return;
    }

    const boardSize = getBoardSizeByDifficulty(difficulty);

    return board.map((row, i) => {
      const cellsArr = [];
      for (let j = 0; j < boardSize; j++) { // creating an array for the current row | col
        if (position === "left") {
          cellsArr.push(board[i][j].shouldBeFilled);
        } else {
          cellsArr.push(board[j][i].shouldBeFilled);
        }
      }
      const hintsArr = getHintsArrFromCellsArr(cellsArr);
      return (
        <div key={i} className={`${position}-hints-hint`}>
          {hintsArr.map(hint => <span key={Math.random()}>{hint}</span>)}
        </div>
      )
    })
  }

  return (
    <div className={`${props.position}-hints`}>
      {renderHints()}
    </div>
  );
}