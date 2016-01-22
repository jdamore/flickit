'use strict';

import { expect } from 'chai';

import { addScore, ADD_SCORE } from '../src/infra/actions';

describe('Actions', () => {

	describe('addScore', () => {

		it('returns an ADD_SCORE action', () => {
			expect(addScore(0, 'test').type).to.equal(ADD_SCORE);
		});

		it('returns the score with the payload', () => {
			expect(addScore(7, 'test').payload.score).to.equal(7);
		});

		it('returns the word with the metadata', () => {
			expect(addScore(0, 'testAWord').meta.word).to.equal('testAWord');
		});

	});
	
});