'use strict';

jest.dontMock('./flickit-test-utils');
jest.dontMock('../src/app/index');
//jest.dontMock('../src/app/card/index');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const FlickitTestUtils = require('./flickit-test-utils');
const App = require('../src/app/index');

describe('App', () => {

	let app, appNode;
	let numCards = 3;
	let deck, cards;

	beforeEach(function() {
		app = ReactTestUtils.renderIntoDocument(<App numCards={numCards}/>);
		appNode = ReactDOM.findDOMNode(app);
		deck = ReactTestUtils.findRenderedDOMComponentWithTag(app, 'ul');
		cards = deck.children;
	});

	describe('render', () => {

  		it('render a deck of cards', () => {
  			expect(deck).not.toBeUndefined();
  			expect(deck).not.toBeNull();
		});

  		it('render the expected number of cards', () => {
  			expect(cards.length).toBe(numCards);
		});

	});

});