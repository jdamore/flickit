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
      <div id='card' className={styles.container + ' ' + (this.state.flipped ? styles.flipped : '')} onClick={this.flip.bind(this)}>
        <span id='front' className={styles.front + ' ' + (this.state.flipped ? styles.hidden : styles.shown)}> {this.props.front} </span>
        <span id='back' className={styles.back + ' ' + (!this.state.flipped ? styles.hidden : styles.shown)}> {this.props.back} </span>
      </div>
    );
  }
}

Card.propTypes = { front: React.PropTypes.string, back: React.PropTypes.number };
Card.defaultProps = { word: 'Flipit' };

