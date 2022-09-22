import { combineReducers } from 'redux';
import board from './reducer_board';
import difficulty from './reducer_difficulty';
import numOfRemainingLives from './reducer_numOfRemainingLives';

const rootReducer = combineReducers({
  board, difficulty, numOfRemainingLives
});

export default rootReducer;