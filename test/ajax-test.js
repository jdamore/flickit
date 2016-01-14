//'use strict';

jest.dontMock('../src/infra/ajax');
jest.dontMock('../src/infra/utils');
jest.dontMock('fakexmlhttprequest');

import Utils from '../src/infra/utils';
import FakeXmlHttpRequest from 'fakexmlhttprequest';

/* This is a bug in babel-jest that forces using require */
const Ajax = require('../src/infra/ajax');

describe('Ajax', () => {

	let ajax;

	beforeEach(function() {
		ajax = new Ajax("");
	});

	describe('get', () => {

		let mockMockXmlHttpRequest;

		beforeEach(function() {
			mockMockXmlHttpRequest = new FakeXmlHttpRequest();
			ajax.setXmlHttpRequest(mockMockXmlHttpRequest);
			ajax.get(function(){}, function(){})
		});

  	it('makes a request', () => {
  		expect(mockMockXmlHttpRequest.send).toBeCalled();
		});

	});
});