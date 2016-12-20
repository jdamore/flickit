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
  			cards.push(
          <div id={'card-container-'+this.props.lexicon[i]} name='card-container' style={{zIndex:i}} className={styles.card + ' ' + (i===0?styles.firstcard:'')}>
            <Card word={this.props.lexicon[i]} score={12} />
          </div>
        );
		}
    return (
      <div id='app' name='app' className={styles.container}>
        <div id='deck' name='deck' className={styles.deck}>{cards}</div>
      </div>
    );
	}
}

App.propTypes = { lexicon: React.PropTypes.array };
App.defaultProps = { lexicon: [ { word: 'loremipsum' }, { word: 'dolor' }, { word: 'sitamet' }, { word: 'consectetuer' } ] };