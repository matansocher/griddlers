import { SET_BOARD, SET_CELL, RESET_BOARD } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SET_BOARD:
      return action.payload;
    case SET_CELL:
      const { i, j } = action.payload;
      state[i][j] = action.payload;
      return [].concat(state);
    case RESET_BOARD: 
      return [].concat(action.payload);
    default:
      return state;
  }
}