'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

export default class Card extends React.Component {

  constructor() {
    super();
    this.state = { value: 'init' };
  }

  click() {
    if(this.state.value==='init') {
      this.setState({ value: 'drawn' });
    }
    else if(this.state.value==='drawn') {
      this.setState({ value: 'flipped' });
    }
    else if(this.state.value==='flipped') {
      this.setState({ value: 'init' });
    }
  }
 
  render() {
    return (
      <div id={'card-'+this.props.word} name='card' className={styles.card + ' ' + styles[this.state.value]} onClick={this.click.bind(this)}>
        <span id={'back-'+this.props.word} name='back' className={styles.back + ' ' + (this.state.value==='init' ? styles.shown : styles.hidden)}></span>
        <span id={'word-'+this.props.word} name='word' className={styles.word + ' ' + (this.state.value==='drawn' ? styles.shown : styles.hidden)}> {this.props.word} </span>
        <span id={'score-'+this.props.word} name='score' className={styles.score + ' ' + (this.state.value==='flipped' ? styles.shown : styles.hidden)}> {this.props.score} </span>
      </div>
    );
  }
}

Card.propTypes = { word: React.PropTypes.string, score: React.PropTypes.number };
Card.defaultProps = { word: 'Flipit' };

