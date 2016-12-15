'use strict';

import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Card from '../src/card/index';
import Styles from '../src/card/index.scss';

Styles.container = 'container';
Styles.flipped = 'flipped';
Styles.front = 'front';
Styles.back = 'back';
Styles.shown = 'shown';
Styles.hidden = 'hidden';

describe('Card', () => {

	let card;
	let cardNode, frontNode, backNode;
	let word = 'word';
	let score = 12;

	beforeEach(function() {
		card = ReactTestUtils.renderIntoDocument(<Card front={word} back={score}/>);
		cardNode = ReactDOM.findDOMNode(card);
		let cardChildren = ReactTestUtils.scryRenderedDOMComponentsWithTag(card, 'div');
		frontNode = Array.find(cardChildren, n => n.getAttribute('name') === 'front');
		backNode = Array.find(cardChildren, n => n.getAttribute('name') === 'back');
	});

	describe('render', () => {

  	it('renders the card', () => {
  		expect(cardNode).to.not.be.undefined;
		});
	
  	it('renders the front', () => {
  		expect(frontNode).to.not.be.undefined;
		});
	
  	it('renders the back', () => {
  		expect(backNode).to.not.be.undefined;
		});
	
  	it('shows the frton', () => {
  		expect(frontNode.getAttribute('class')).to.contain('shown');
  	});
	
  	it('hides the back', () => {
  		expect(backNode.getAttribute('class')).to.contain('hidden');
  	});
	
	});


	describe('flip', () => {

		beforeEach(function() {
			card.flip();
		});
	
  	it('hoides the front', () => {
  		expect(frontNode.getAttribute('class')).to.contain('hidden');
		});
	
  	it('shows the back', () => {
  		expect(backNode.getAttribute('class')).to.contain('shown');
		});
	
  	it('changes the card state to flipped', () => {
  		expect(card.state.flipped).to.be.true;
  	});

	});

});
