'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Stream from '../../infra/stream';
import { addScore } from '../../infra/events';

import Player from '../../components/player';

import styles from './index.scss';

export default class Card extends React.Component {

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
    this.stream         = Stream();
  }
 
  render() {
    return (
      <div name='card' id={'card-'+this.props.id} className={styles.container}>
        <div name='word' id={'card-'+this.props.id+'-word'} className={styles.front}>
          <div name='written' className={styles.word} onClick={this.onClick} >{this.state.word}</div>
          <div name='player' className={styles.player}><Player streamUrl={'https://soundcloud.com/jean-damore/'+this.state.word} clientId='0269ff1c8dbf9a24d542e90d80689a0c'/></div>
        </div>
        <div name='score' id={'card-'+this.props.id+'-score'} className={styles.back} onClick={this.onClick} >{this.score()}</div>
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
    if(this.state.side==='front') {
      this.stream.add(addScore(this.score(), this.state.word));
    }
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
    this.cardChildNode('word').classList.toggle(styles.flipped);
    this.cardChildNode('score').classList.toggle(styles.flipped);
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

