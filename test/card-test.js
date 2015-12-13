'use strict';

jest.dontMock('./flickit-test-utils');
jest.dontMock('../src/app/card/index');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const FlickitTestUtils = require('./flickit-test-utils');
const Card = require('../src/app/card/index');

describe('Card', () => {

	describe('render', () => {

		let cardNode;
	
		beforeEach(function() {
			cardNode = ReactDOM.findDOMNode(ReactTestUtils.renderIntoDocument(<Card/>));
		});
	
  		it('renders a <div>', () => {
  			expect(cardNode.tagName).toEqual('DIV');
		});
	
  		it('renders the card', () => {
  			expect(cardNode.getAttribute('name')).toEqual('card');
		});

	});

});