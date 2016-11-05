'use strict';

import Chai from 'chai';
import ChaiSpies from 'chai-spies';
import Proxyquire from 'proxyquire';

Chai.use(ChaiSpies);
let expect = Chai.expect;
let should = Chai.should;

import { Stream } from '../../src/infra/stream';

describe('Stream', () => {

	let stream;

	beforeEach(function() {
		stream = new Stream({});
	});

	describe('add', () => {

		let subscriber;

		beforeEach(function() {
			subscriber = Chai.spy();
			stream.subscribe(subscriber);
			stream.add({})
		});

		it('notifies aubscribers', () => {
			expect(subscriber).to.have.been.called();
		});

	});
	
});