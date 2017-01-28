import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import Scoreboard from '../../src/components/scoreboard/index'
import Styles from '../../src/components/scoreboard/index.scss'

describe('<Scoreboard />', () => {

	let scoreboard = null

	beforeEach(function() {
		chai.use(chaiEnzyme())
		Styles.scoreboard = 'styles.scoreboard';
		scoreboard = shallow(<Scoreboard score={42} />)
	})

  it('should render the scoreboard', () => {
    expect(scoreboard).to.exist
  })

  it('should have the correct id', () => {
    expect(scoreboard).to.have.id('scoreboard')
  })

  it('should have the correct name', () => {
    expect(scoreboard).to.have.attr('name', 'scoreboard')
  })

  it('should have the correct CSS class name', () => {
    expect(scoreboard).to.have.className('styles.scoreboard')
  })

  it('should render the score', () => {
    expect(scoreboard).to.have.text(42)
  })

})