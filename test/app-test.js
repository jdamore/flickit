'use strict';

jest.dontMock('../src/app/index');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Utils from '../src/infra/utils';

/* This is a bug in babel-jest that forces using require */
/* https://github.com/babel/babel-jest/issues/22 */
const App = require('../src/app/index');

describe('App', () => {

	let app;

	describe('render', () => {

		let appNode;
		let numCards = 3;
		let deck, cards;

		beforeEach(function() {
			app = ReactTestUtils.renderIntoDocument(<App numCards={numCards}/>);
			appNode = ReactDOM.findDOMNode(app);
			deck = ReactTestUtils.findRenderedDOMComponentWithTag(app, 'ul');
			cards = deck.children;
		});

  	it('renders a deck of cards', () => {
  		expect(deck).not.toBeUndefined();
  		expect(deck).not.toBeNull();
		});

  	it('renders the expected number of cards', () => {
  		expect(cards.length).toBe(numCards);
		});

	});
	
});