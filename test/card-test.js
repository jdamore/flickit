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

		let cardDOMNode;
	
		beforeEach(function() {
			let cardComponent = ReactTestUtils.renderIntoDocument(<Card/>);
			cardDOMNode = ReactDOM.findDOMNode(cardComponent);
		});
	
  		it('renders a <div>', () => {
  			expect(cardDOMNode.tagName).toEqual('DIV');
		});
	
  		it('renders the card', () => {
  			expect(cardDOMNode.getAttribute('name')).toEqual('card');
		});
	
  		it('has child nodes', () => {expect(cardDOMNode.hasChildNodes()).toEqual(true);
		});
	
  		it('has a front', () => {
  			expect(cardDOMNode.childNodes[0].getAttribute('name')).toEqual('card-front');
		});
	
  		it('has a back', () => {
  			expect(cardDOMNode.childNodes[1].getAttribute('name')).toEqual('card-back');
		});

	});

});