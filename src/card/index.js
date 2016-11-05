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
      <div name='card' className={ styles.container + ' ' + (this.state.flipped ? styles.flipped : '')} onClick={this.flip.bind(this)}>
        <div is up='true' name='front' class={styles.front + ' ' + (this.state.flipped ? styles.flipped : '')}> {this.props.front} </div>
        <div is up='false' name='back' class={styles.back + ' ' + (this.state.flipped ? styles.flipped : '')}> {this.props.back} </div>
      </div>
    );
  }
}

Card.propTypes = { front: React.PropTypes.string, back: React.PropTypes.number };
Card.defaultProps = { word: 'Flipit' };

