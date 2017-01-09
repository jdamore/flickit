'use strict';

import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Card from '../src/components/card/index';
import Styles from '../src/components/card/index.scss';

Styles.container = 'container';
Styles.flipped = 'flipped';
Styles.word = 'word';
Styles.score = 'score';
Styles.back = 'back';
Styles.shown = 'shown';
Styles.hidden = 'hidden';

describe('Card', () => {

	let card;
	let cardNode, backSide, wordSide, scoreSide;
	let word = 'word';
	let score = 12;

	beforeEach(function() {
		card = ReactTestUtils.renderIntoDocument(<Card word={word} score={score}/>);
		cardNode = ReactDOM.findDOMNode(card);
		let cardChildren = ReactTestUtils.scryRenderedDOMComponentsWithTag(card, 'span');
		backSide = Array.find(cardChildren, n => n.getAttribute('id') === 'back-'+word);
		wordSide = Array.find(cardChildren, n => n.getAttribute('id') === 'word-'+word);
		scoreSide = Array.find(cardChildren, n => n.getAttribute('id') === 'score-'+word);
	});

	describe('render', () => {

  	it('renders the card', () => {
  		expect(cardNode).to.not.be.undefined;
		});
	
  	it('renders the back side', () => {
  		expect(backSide).to.not.be.undefined;
		});
	
  	it('renders the word side', () => {
  		expect(wordSide).to.not.be.undefined;
		});
	
  	it('renders the score side', () => {
  		expect(scoreSide).to.not.be.undefined;
		});
	
  	it('shows the back side', () => {
  		expect(backSide.getAttribute('class')).to.contain('shown');
  	});
	
  	it('hides the word side', () => {
  		expect(wordSide.getAttribute('class')).to.contain('hidden');
  	});
	
  	it('hides the score side', () => {
  		expect(scoreSide.getAttribute('class')).to.contain('hidden');
  	});
	
	});


	describe('first click', () => {

		beforeEach(function() {
			card.click();
		});
	
  	it('hides the back', () => {
  		expect(backSide.getAttribute('class')).to.contain('hidden');
		});
	
  	it('shows the word', () => {
  		expect(wordSide.getAttribute('class')).to.contain('shown');
		});
	
  	it('keeps the score hidden', () => {
  		expect(scoreSide.getAttribute('class')).to.contain('hidden');
		});
	
  	it('changes the card state to drawn', () => {
  		expect(card.state.value).to.equal('drawn');
  	});

	});


	describe('second click', () => {

		beforeEach(function() {
			card.click();
			card.click();
		});
	
  	it('keeps the back hidden', () => {
  		expect(backSide.getAttribute('class')).to.contain('hidden');
		});
	
  	it('hides the word', () => {
  		expect(wordSide.getAttribute('class')).to.contain('hidden');
		});
	
  	it('shows the score', () => {
  		expect(scoreSide.getAttribute('class')).to.contain('shown');
		});
	
  	it('changes the card state to flipped', () => {
  		expect(card.state.value).to.equal('flipped');
  	});

	});


	describe('third click', () => {

		beforeEach(function() {
			card.click();
			card.click();
			card.click();
		});
	
  	it('shows the back', () => {
  		expect(backSide.getAttribute('class')).to.contain('shown');
		});
	
  	it('hides the word', () => {
  		expect(wordSide.getAttribute('class')).to.contain('hidden');
		});
	
  	it('hides the score', () => {
  		expect(scoreSide.getAttribute('class')).to.contain('hidden');
		});
	
  	it('changes the card state to init', () => {
  		expect(card.state.value).to.equal('init');
  	});

	});

});
