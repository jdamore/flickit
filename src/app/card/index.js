'use strict';

import React from 'react';
import styles from './index.scss';

class Card extends React.Component {

  constructor() {
    super();
    this.state = { word: '', score: 0 };
    this.onClick = this._onClick.bind(this);
    this.card = this._card.bind(this);
    this.cardChild = this._cardChild.bind(this);
  }

  componentDidMount() {
    this.setState( { word:'a word', score: 10} );
  }
 
  render() {
    return (
      <div name="card" id={'card-'+this.props.id} className={styles.container} onClick={this.onClick} >
        <span name="card-front" id={'card-'+this.props.id+'-front'} className={styles.front}>{this.state.word}</span>
        <span name="card-back" id={'card-'+this.props.id+'-back'} className={styles.back}>{this.state.score}</span>
      </div>
    );
  }
 
  _onClick() {
    this.card().classList.toggle(styles.flipped);
    this.cardChild('front').classList.toggle(styles.flipped);
    setTimeout(function() {
      this.cardChild('back').classList.toggle(styles.flipped)
    }.bind(this), 500);
  }
 
  _card() {
    return document.getElementById('card-'+this.props.id);
  }
 
  _cardChild(childId) {
    return document.getElementById('card-'+this.props.id+'-'+childId);
  }

}

module.exports = Card;

