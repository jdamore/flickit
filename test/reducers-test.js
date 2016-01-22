'use strict';

import { expect } from 'chai';
import { addScore } from '../src/infra/actions';
import { play } from '../src/infra/reducers';

describe('Reducers', () => {

	describe('play', () => {

		it('returns an unchanged state', () => {
			let state = { score: 123 };
			expect(play(state, { type: 'TEST' })).to.equal(state);
		});

		it('returns a new state', () => {
			let state = { score: 123 };
			expect(play(state, addScore(0, 'test'))).not.to.equal(state);
		});

		it('returns an updated state', () => {
			let state = { score: 123 };
			expect(play(state, addScore(12, 'test')).score).to.equal(123+12);
		});

	});
	
});