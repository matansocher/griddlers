import { SET_NUM_OF_REMAINING_LIVES } from '../actions/types';

export default function(state = 3, action) {
  switch (action.type) {
    case SET_NUM_OF_REMAINING_LIVES:
      return action.payload;
    default:
      return state;
  }
}