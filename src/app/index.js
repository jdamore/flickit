'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../card';
import styles from './index.scss';

export default class App extends React.Component {

  constructor() {
    super();
  }

	render() {
		let cards = [];
		for (var i = 0; i < this.props.lexicon.length; i++) {
  			cards.push(<div style={{zIndex:i}} className={styles.card}><Card front={this.props.lexicon[i].word} back={12} /></div>);
		}
    return (
      <div id='app' className={styles.container}>
        <div id='deck' className={styles.deck}>{cards}</div>
      </div>
    );
	}
}

App.propTypes = { lexicon: React.PropTypes.array };
App.defaultProps = { lexicon: [ { word: 'loremipsum' }, { word: 'dolor' }, { word: 'sitamet' }, { word: 'consectetuer' } ] };