import { 
  SET_DIFFICULTY,
  SET_BOARD,
  SET_CELL,
  SET_NUM_OF_REMAINING_LIVES,
  RESET_BOARD
} from './types';

export function setDifficulty(difficulty) {
  return {
    type: SET_DIFFICULTY,
    payload: difficulty
  }
}

export function setBoard(board) {
  return {
    type: SET_BOARD,
    payload: board
  }
}

export function setCell(cell) {  
  return {
    type: SET_CELL,
    payload: cell
  }
}

export function setNumOfRemainingLives(numOfRemainingLives) {
  return {
    type: SET_NUM_OF_REMAINING_LIVES,
    payload: numOfRemainingLives
  }
}

export function resetBoard(resetedBoard) {
  return {
    type: RESET_BOARD,
    payload: resetedBoard
  }
}
