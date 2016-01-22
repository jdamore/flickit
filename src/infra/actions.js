export const ADD_SCORE = 'ADD_SCORE';

export function addScore(score, word) {
  return { type: ADD_SCORE, payload: { score: score }, meta: { word: word } }
};
