'use strict';

jest.dontMock('../src/app/index');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Utils from '../src/infra/utils';
import Ajax from '../src/infra/ajax';

/* This is a bug in babel-jest that forces using require */
const App = require('../src/app/index');

describe('App', () => {

	let app

	describe('render', () => {

		let appNode;
		let numCards = 3;
		let deck, cards;

		beforeEach(function() {
			let AppTest = class extends App {
      	componentWillMount() { }
      };
			app = ReactTestUtils.renderIntoDocument(<AppTest numCards={numCards}/>);
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

	describe('componentWillMount', () => {

		let ajax;

		beforeEach(function() {
			ajax = new Ajax("");
			ajax.get = jest.genMockFunction();
			app = new App();
  		app.setAjax(ajax);
			app.componentWillMount();
		});

  	it('fetches the dictionary', () => {
  			expect(ajax.get).toBeCalled();
		});

	});

});