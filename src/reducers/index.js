'use strict'

import QueryString from 'query-string'
import { combineReducers } from 'redux'

import Lexicon from '../lexicon'
import { SCORE_POINTS } from '../actions'

const score = (state = 0, action) => {
  switch (action.type) {
    case SCORE_POINTS:
    	return state + action.points
    default:
      return state
  }
}

const lexicon = (state, action) => {
	if(state == undefined) {
		let qs = QueryString.parse(location.search)
		return Lexicon[qs.lexicon] 
	}
	return state
}

const reducers = combineReducers({
  score,
  lexicon
})

export default reducers