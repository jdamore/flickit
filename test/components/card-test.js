'use strict';

import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Card from '../../src/components/card/index';
import Styles from '../../src/components/card/index.scss';

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
  			expect(card.newWord()).not.to.equal(word);
		});

	});

	describe('score', () => {

  	it('returns 5 for the flipit word', () => {
  			expect(card.score()).to.equal(5);
		});

  	it('returns the computed score for the current word', () => {
  			card.setState({word:'test'});
  			let testScore = card.score();
  			expect(testScore).not.to.equal(0);
		});

  	it('returns different computed scores for different words', () => {
  			card.setState({word:'test'});
  			let testScore = card.score();
  			card.setState({word:'testAgain'});
  			let testAgainScore = card.score();
  			expect(testAgainScore).not.to.equal(testScore);
		});

	});

	describe('render', () => {

  	it('renders the card', () => {
  			expect(cardNode.tagName).to.equal('DIV');
		});
	
  	it('renders the front', () => {
  			expect(cardFrontNode.tagName).to.equal('SPAN');
		});
	
  	it('renders the back', () => {
  			expect(cardBackNode.tagName).to.equal('SPAN');
		});
	
  	it('renders the card with the correct name', () => {
  			expect(cardNode.getAttribute('name')).to.equal('card');
		});
	
  	it('renders the front with the correct name', () => {
  			expect(cardFrontNode.getAttribute('name')).to.equal('card-front');
		});
	
  	it('renders the back with the correct name', () => {
  			expect(cardBackNode.getAttribute('name')).to.equal('card-back');
		});

	});

	describe('onclick', () => {

		describe('first flip', () => {

			beforeEach(function() {
				card.onClick();
			});
		
  		it('flips the card', () => {
  				expect(cardNode.getAttribute('class')).to.contain('flipped');
			});
		
  		it('flips the front', () => {
  				expect(cardFrontNode.getAttribute('class')).to.contain('flipped');
			});
		
  		it('flips the back', () => {
  				expect(cardBackNode.getAttribute('class')).to.contain('flipped');
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
  			expect(cardNode.getAttribute('class')).not.to.contain('flipped');
			});
		
  		it('unflips the front', () => {
  			expect(cardFrontNode.getAttribute('class')).not.to.contain('flipped');
			});
		
  		it('unflips the back', () => {
  			expect(cardBackNode.getAttribute('class')).not.to.contain('flipped');
			});
		
  		it('shows a new word', () => {
				let newWord = cardFrontNode.innerHTML;
  			expect(newWord).not.to.equal(word);
			});

  		});

	});

});