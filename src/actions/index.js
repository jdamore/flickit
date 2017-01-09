'use strict'

export const SCORE_POINTS = 'SCORE_POINTS'

export const scorePoints = (points) => {
  return {
    type: SCORE_POINTS,
    points: points
  }
}