'use strict';

jest.dontMock('../src/infra/utils');
jest.dontMock('../src/app/card/index');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

/* This is a bug in babel-jest that forces using require */
/* https://github.com/babel/babel-jest/issues/22 */
const Card = require('../src/app/card/index');
const Styles = require('../src/app/card/index.scss');

Styles.container = 'container';
Styles.flipped = 'flipped';
Styles.front = 'front';
Styles.back = 'back';

describe('Card', () => {

	let card;
	let cardNode, cardFrontNode, cardBackNode;
	let lexicon = [{word:'word1'}, {word:'word2'}, {word:'word3'}, {word:'word4'}]

	beforeEach(function() {
		card = ReactTestUtils.renderIntoDocument(<Card lexicon={lexicon}/>);
		cardNode = ReactDOM.findDOMNode(card);
		let cardChildren = ReactTestUtils.scryRenderedDOMComponentsWithTag(card, 'span');
		cardFrontNode = Array.find(cardChildren, n => n.getAttribute('name') === 'card-front');
		cardBackNode = Array.find(cardChildren, n => n.getAttribute('name') === 'card-back');
	});

	describe('newWord', () => {

  	it('returns a new word', () => {
  			let word = card.state.word;
  			expect(card.newWord()).not.toEqual(word);
		});

	});

	describe('score', () => {

  	it('returns 5 for the flipit word', () => {
  			expect(card.score()).toEqual(5);
		});

  	it('returns the computed score for the current word', () => {
  			card.setState({word:'test'});
  			let testScore = card.score();
  			expect(testScore).not.toEqual(0);
		});

  	it('returns different computed scores for different words', () => {
  			card.setState({word:'test'});
  			let testScore = card.score();
  			card.setState({word:'testAgain'});
  			let testAgainScore = card.score();
  			expect(testAgainScore).not.toEqual(testScore);
		});

	});

	describe('render', () => {

  	it('renders the card', () => {
  			expect(cardNode.tagName).toEqual('DIV');
		});
	
  	it('renders the front', () => {
  			expect(cardFrontNode.tagName).toEqual('SPAN');
		});
	
  	it('renders the back', () => {
  			expect(cardBackNode.tagName).toEqual('SPAN');
		});
	
  	it('renders the card with the correct name', () => {
  			expect(cardNode.getAttribute('name')).toEqual('card');
		});
	
  	it('renders the front with the correct name', () => {
  			expect(cardFrontNode.getAttribute('name')).toEqual('card-front');
		});
	
  	it('renders the back with the correct name', () => {
  			expect(cardBackNode.getAttribute('name')).toEqual('card-back');
		});

	});

	describe('onclick', () => {

		describe('first flip', () => {

			beforeEach(function() {
				card.onClick();
			});
		
  		it('flips the card', () => {
  				expect(cardNode.getAttribute('class')).toContain('flipped');
			});
		
  		it('flips the front', () => {
  				expect(cardFrontNode.getAttribute('class')).toContain('flipped');
			});
		
  		it('flips the back', () => {
  				expect(cardBackNode.getAttribute('class')).toContain('flipped');
			});

  		});

		describe('second flip', () => {

			let word;

			beforeEach(function() {
				word = cardFrontNode.innerHTML;
				card.onClick();
				card.onClick();
			});
		
  		it('unflips the card', () => {
  			expect(cardNode.getAttribute('class')).not.toContain('flipped');
			});
		
  		it('unflips the front', () => {
  			expect(cardFrontNode.getAttribute('class')).not.toContain('flipped');
			});
		
  		it('unflips the back', () => {
  			expect(cardBackNode.getAttribute('class')).not.toContain('flipped');
			});
		
  		it('shows a new word', () => {
				let newWord = cardFrontNode.innerHTML;
  			expect(newWord).not.toEqual(word);
			});

  		});

	})

});