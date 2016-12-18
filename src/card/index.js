'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

export default class Card extends React.Component {

  constructor() {
    super();
    this.state = { flipped: false };
  }

  flip() {
    this.setState({ flipped: !this.state.flipped });
  }
 
  render() {
    return (
      <div id={'card-'+this.props.word} name='card' className={styles.container + ' ' + (this.state.flipped ? styles.flipped : '')} onClick={this.flip.bind(this)}>
        <span id={'front-'+this.props.word} name='front' className={styles.front + ' ' + (this.state.flipped ? styles.hidden : styles.shown)}> {this.props.word} </span>
        <span id={'back-'+this.props.word} name='back' className={styles.back + ' ' + (!this.state.flipped ? styles.hidden : styles.shown)}> {this.props.score} </span>
      </div>
    );
  }
}

Card.propTypes = { word: React.PropTypes.string, score: React.PropTypes.number };
Card.defaultProps = { word: 'Flipit' };

