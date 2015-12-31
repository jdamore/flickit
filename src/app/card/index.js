'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

class Card extends React.Component {

  constructor() {
    super();
    this.state = { word: '', score: 0 };
    this.onClick = this._onClick.bind(this);
    this.cardNode = this._cardNode.bind(this);
    this.cardChildNode = this._cardChildNode.bind(this);
    this._styles = styles;
  }

  componentDidMount() {
    this.setState( { word:'Sapin de Noel', score: 20} );
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
    this.cardNode().classList.toggle(styles.flipped);
    this.cardChildNode('front').classList.toggle(styles.flipped);
    this.cardChildNode('back').classList.toggle(styles.flipped);
  }
 
  _cardNode() {
    let cardNode = ReactDOM.findDOMNode(this);
    return cardNode;
  }
 
  _cardChildNode(childId) {
    return Array.find(this.cardNode().childNodes, n => n.getAttribute('id')=='card-'+this.props.id+'-'+childId);
  }

}

module.exports = Card;

