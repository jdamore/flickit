'use strict';


jest.dontMock('./flickit-test-utils');
jest.dontMock('../src/app/card/index');

// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const FlickitTestUtils = require('./flickit-test-utils');
const Card = require('../src/app/card/index');

describe('Card', () => {

	let card, cardFront, cardBack;

	beforeEach(function() {
		card = ReactTestUtils.renderIntoDocument(<Card/>);
		let cardChildren = ReactTestUtils.scryRenderedDOMComponentsWithTag(card, 'span');
		cardFront = Array.find(cardChildren, n => n.getAttribute('name') == 'card-front');
		cardBack = Array.find(cardChildren, n => n.getAttribute('name') == 'card-back');
	});

	describe('render', () => {

		let cardNode;
	
		beforeEach(function() {
			cardNode = ReactDOM.findDOMNode(card);
		});
	
  		it('renders a <div>', () => {
  			expect(cardNode.tagName).toEqual('DIV');
		});
	
  		it('renders the card', () => {
  			expect(cardNode.getAttribute('name')).toEqual('card');
		});
	
  		it('has a front', () => {
  			expect(cardFront).not.toBeUndefined();
		});
	
  		it('has a back', () => {
  			expect(cardBack).not.toBeUndefined();
		});

	});

	xdescribe('onclick', () => {

		beforeEach(function() {
			card.onClick();
		});
	
  		it('flips the front', () => {
  			expect(cardFront.classList).toContain('toggled');
		});

	})

});