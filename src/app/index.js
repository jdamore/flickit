'use strict';

import Utils from '../infra/utils';

import React from 'react';
import Card from '../card';
import Scoreboard from '../scoreboard';
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
        <ul id='deck' className={styles.deck}>{cards}</ul>;
      </div>
    );
	}
}

module.exports = App;