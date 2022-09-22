// import _ from 'lodash';
import { SET_DIFFICULTY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SET_DIFFICULTY:
      return action.payload;
    default:
      return state;
  }
}