'use strict';

jest.dontMock('../src/infra/actions');

/* This is a bug in babel-jest that forces using require */
/* https://github.com/babel/babel-jest/issues/22 */
const Actions = require('../src/infra/actions');

describe('Actions', () => {

	describe('addScore', () => {

		it('returns an ADD_SCORE action', () => {
			expect(Actions.addScore(0, 'test').type).toBe(Actions.ADD_SCORE);
		});

		it('returns the score with the payload', () => {
			expect(Actions.addScore(7, 'test').payload.score).toBe(7);
		});

		it('returns the word with the metadata', () => {
			expect(Actions.addScore(0, 'testAWord').meta.word).toBe('testAWord');
		});

	});
	
});