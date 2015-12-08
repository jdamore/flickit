import React from 'react';
import styles from './index.scss'

class Card extends React.Component {

  constructor() {
    super();
    this.state = { word: '', score: 0 };
    this.onClick = this._onClick.bind(this);
    this.card = this._card.bind(this);
    this.cardChild = this._cardChild.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    /* should get the word and score from a webservices */
    this.setState( { word:'a word', score: 10} );
  }
 
  render() {
    console.log('render');
    return (
      <div id={'card-'+this.props.id} className={styles.container} onClick={this.onClick} >
        <span id={'card-'+this.props.id+'-front'} className={styles.front}>{this.state.word}</span>
        <span id={'card-'+this.props.id+'-back'} className={styles.back}>{this.state.score}</span>
        <span id={'card-'+this.props.id+'-flipped'} className='flipped-hidden'>{styles.flipped}</span>
      </div>
    );
  }
 
  _onClick() {
    console.log('onClick');
    var flipped = this.cardChild('flipped').innerHTML;
    console.log('onClick: flipped='+flipped);
    this.card().classList.toggle(flipped);
    this.cardChild('front').classList.toggle(flipped);
    setTimeout(function() {
      this.cardChild('back').classList.toggle(flipped)
    }.bind(this), 500);
  }
 
  _card() {
    console.log('card: Will returm element with id card-'+this.props.id);
    return document.getElementById('card-'+this.props.id);
  }
 
  _cardChild(childId) {
    console.log('cardChild: Will returm element with id card-'+this.props.id+'-'+childId);
    return document.getElementById('card-'+this.props.id+'-'+childId);
  }

}

module.exports = Card;

