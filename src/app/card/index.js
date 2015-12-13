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
        <span id={'card-'+this.props.id+'-front'} className={styles.front}>{this.state.word}</span>
        <span id={'card-'+this.props.id+'-back'} className={styles.back}>{this.state.score}</span>
        <span id={'card-'+this.props.id+'-flipped'} className="flipped-hidden">{styles.flipped}</span>
      </div>
    );
  }
 
  _onClick() {
    let flipped = this.cardChild('flipped').innerHTML;
    this.card().classList.toggle(flipped);
    this.cardChild('front').classList.toggle(flipped);
    setTimeout(function() {
      this.cardChild('back').classList.toggle(flipped)
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

