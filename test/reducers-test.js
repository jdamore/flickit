'use strict';

jest.dontMock('../src/infra/actions');
jest.dontMock('../src/infra/reducers');

/* This is a bug in babel-jest that forces using require */
/* https://github.com/babel/babel-jest/issues/22 */
const Actions = require('../src/infra/actions');
const Reducers = require('../src/infra/reducers');

describe('Reducers', () => {

	describe('play', () => {

		it('returns an unchanged state', () => {
			let state = { score: 123 };
			expect(Reducers.play(state, { type: 'TEST' })).toBe(state);
		});

		it('returns a new state', () => {
			let state = { score: 123 };
			expect(Reducers.play(state, Actions.addScore(0, 'test'))).not.toBe(state);
		});

		it('returns an updated state', () => {
			let state = { score: 123 };
			expect(Reducers.play(state, Actions.addScore(12, 'test')).score).toBe(123+12);
		});

	});
	
});