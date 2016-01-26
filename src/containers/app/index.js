'use strict';

import React from 'react';

import Card from '../../components/card';
import Scoreboard from '../../components/scoreboard';
import Utils from '../../infra/utils';

import styles from './index.scss';

class App extends React.Component {

  constructor() {
    super();
  }

	render() {
		let cards = [];
		for (var i = 0; i < this.props.numCards; i++) {
  			cards.push(<li className={styles.card}><Card key={i} id={i} lexicon={this.props.lexicon}/></li>);
		}
    return (
      <div className={styles.container}>
        <Scoreboard/>
        <ul id='deck' className={styles.deck}>{cards}</ul>
      </div>
    );
	}
}

module.exports = App;