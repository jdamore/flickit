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
    document.getElementById('card').classList.toggle('flipped')
    document.getElementById('front').classList.toggle('flipped')
    setTimeout(function(){document.getElementById('back').classList.toggle('flipped')}, 500);
  },

  render: function() {
    console.log('render');
  	return (
      <div id='card' className='container' onClick={this.onClick} >
        <span id='front' className='front'>{this.state.word}</span>
        <span id='back' className='back'>{this.state.score}</span>
      </div>
  	);
  }

});