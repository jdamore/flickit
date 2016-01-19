import { ADD_SCORE } from './actions';

const initialState = {
  score: 0
};


export function play(state = initialState, action) {
  switch (action.type) {
    case ADD_SCORE:
      return Object.assign({}, state, {
        score: state.score + action.payload.score
      })
    default:
      return state;
  }
};