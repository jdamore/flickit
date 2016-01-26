'use strict';

import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Utils from '../../src/infra/utils';

import App from '../../src/containers/app/index';

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
  		expect(deck).not.to.be.undefined;
  		expect(deck).not.to.be.null;
		});

  	it('renders the expected number of cards', () => {
  		expect(cards.length).to.equal(numCards);
		});

	});
	
});