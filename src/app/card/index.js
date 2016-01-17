'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

class Card extends React.Component {

  constructor() {
    super();
    this.state          = { side: 'front', word:'Flipit', score: 5 };
    this.onClick        = this._onClick.bind(this);
    this.cardNode       = this._cardNode.bind(this);
    this.cardChildNode  = this._cardChildNode.bind(this);
    this.newWord        = this._newWord.bind(this);
    this.flipCard       = this._flipCard.bind(this);
    this.changeWord     = this._changeWord.bind(this);
    this._styles        = styles;
  }
 
  render() {
    return (
      <div name="card" id={'card-'+this.props.id} className={styles.container} onClick={this.onClick} >
        <span name="card-front" id={'card-'+this.props.id+'-front'} className={styles.front}>{this.state.word}</span>
        <span name="card-back" id={'card-'+this.props.id+'-back'} className={styles.back}>{this.state.score}</span>
      </div>
    );
  }

  _newWord() {
    let idx = Math.floor(Math.random()*this.props.lexicon.length);
    let nextWord = this.props.lexicon[idx].word;
    return ( nextWord !== this.state.word ) ? nextWord : this.newWord();
  }

  _onClick() {
    this.flipCard();
    this.changeWord();
  }

  _changeWord() {
    this.setState(function(previousState, currentProps) {
      return (previousState.side==='front') ?
        { side:'back', word:previousState.word, score: previousState.score }
      :
        { side:'front', word:this.newWord(), score: previousState.score };
    });
  }

  _flipCard() {
    this.cardNode().classList.toggle(styles.flipped);
    this.cardChildNode('front').classList.toggle(styles.flipped);
    this.cardChildNode('back').classList.toggle(styles.flipped);
  }
 
  _cardNode() {
    return ReactDOM.findDOMNode(this);
  }
 
  _cardChildNode(childId) {
    return Array.find(this.cardNode().childNodes, n => n.getAttribute('id')=='card-'+this.props.id+'-'+childId);
  }

}

module.exports = Card;

