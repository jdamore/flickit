'use strict';

import Utils from '../infra/utils';

import React from 'react';
import Card from './card';
import styles from './index.scss';

class App extends React.Component {

  constructor() {
    super();
  }

	render() {
		let cards = [];
		for (var i = 0; i < this.props.numCards; i++) {
  			cards.push(<li className={styles.element}><Card key={i} id={i} lexicon={this.props.lexicon}/></li>);
		}
    return <ul id='deck' className={styles.container}>{cards}</ul>;
	}
}

module.exports = App;