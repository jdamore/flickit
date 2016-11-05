'use strict';

import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Utils from '../../src/infra/utils';

import Scoreboard from '../../src/components/scoreboard/index';

describe('Scoreboard', () => {

	let scoreboard;

	describe('render', () => {

		let scoreboardNode;
		let scoreLabel, scoreValue;

		beforeEach(function() {
			scoreboard = ReactTestUtils.renderIntoDocument(<Scoreboard/>);
			scoreboardNode = ReactDOM.findDOMNode(scoreboard);
			let scoreChildren = ReactTestUtils.scryRenderedDOMComponentsWithTag(scoreboard, 'div');
			scoreLabel = Array.find(scoreChildren, n => n.getAttribute('name') === 'score-label');
			scoreValue = Array.find(scoreChildren, n => n.getAttribute('name') === 'score-value');
		});

  	it('renders the score label', () => {
  		expect(scoreLabel).not.to.be.undefined;
		});

  	it('renders the score value', () => {
  		expect(scoreValue.textContent).to.equal('0');
		});

  	it('a default score value of 0', () => {
  		expect(scoreValue.textContent).to.equal('0');
		});

  });
	
});