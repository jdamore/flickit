import React from 'react';
import styles from './index.scss'

module.exports = React.createClass({

  // constructor: function() {
  //   this.state = { word: '', score: 0 };
  // },

  getInitialState: function() {
    return { word: 'xx', score: 0 };
  },

  componentDidMount: function() {
    /* should get the word and score from a webservices */
    this.setState('a word', 10);
  },

  setState: function(word, score) {
    this.state = { word: word, score: score };
  },

  onClick: function(event) {
    document.getElementById('card').classList.toggle('flick')
  },

  render: function() {
  	return (
  		<div id='card' onClick={this.onClick} className={styles.container}>
  				<div className={styles.flicker}>
  					<div className={styles.word}>{this.state.word}</div>
  					<div className={styles.score}>{this.state.score}</div>
  				</div>
  		</div>
  		);
  }

});