import React from 'react';
import styles from './index.scss'

module.exports = React.createClass({

  getInitialState: function() {
    console.log('getInitialState');
    return { word: '', score: 0 };
  },

  componentDidMount: function() {
    console.log('componentDidMount');
    /* should get the word and score from a webservices */
    this.setState( { word:'a word', score: 10} );
  },

  onClick: function(event) {
    console.log('onClick');
    document.getElementById('card').classList.toggle('flick')
  },

  render: function() {
    console.log('render');
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