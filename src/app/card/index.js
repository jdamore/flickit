'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

class Card extends React.Component {

  constructor() {
    super();
    this.state          = { side: 'front', word:'Flipit' };
    this.onClick        = this._onClick.bind(this);
    this.cardNode       = this._cardNode.bind(this);
    this.cardChildNode  = this._cardChildNode.bind(this);
    this.newWord        = this._newWord.bind(this);
    this.flipCard       = this._flipCard.bind(this);
    this.flipState      = this._flipState.bind(this);
    this.score          = this._score.bind(this);
  }
 
  render() {
    return (
      <div name="card" id={'card-'+this.props.id} className={styles.container} onClick={this.onClick} >
        <span name="card-front" id={'card-'+this.props.id+'-front'} className={styles.front}>{this.state.word}</span>
        <span name="card-back" id={'card-'+this.props.id+'-back'} className={styles.back}>{this.score()}</span>
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
    this.flipState();
  }

  _flipState() {
    this.setState(function(previousState, currentProps) {
      return (previousState.side==='front') ?
        { side:'back', word:previousState.word }
      :
        { side:'front', word:this.newWord() };
    });
  }

  _flipCard() {
    this.cardNode().classList.toggle(styles.flipped);
    this.cardChildNode('front').classList.toggle(styles.flipped);
    this.cardChildNode('back').classList.toggle(styles.flipped);
  }

  _score() {
    return this.state.word==='Flipit' ? 5 : this.state.word.length;
  }
 
  _cardNode() {
    return ReactDOM.findDOMNode(this);
  }
 
  _cardChildNode(childId) {
    return Array.find(this.cardNode().childNodes, n => n.getAttribute('id')=='card-'+this.props.id+'-'+childId);
  }

}

module.exports = Card;

