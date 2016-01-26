'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Stream from '../../infra/stream';
import Utils from '../../infra/utils';

import styles from './index.scss';

export default class Scoreboard extends React.Component {

  constructor() {
    super();
    this.i = 10;
    this.state = { score: 0 };
    this.score = this._score.bind(this);
    this.stream = Stream();
  }

  render() {
    return (
      <div name='scoreboard' className={styles.container}>
     	<div name='score-label' className={styles.label}>Score</div>
     	<div name='score-value' className={styles.value}>{this.state.score}</div>
      </div>
    );
  }

  componentWillMount() {
    this.stream._subscribe(this.score);
  }

  _score(event) {
    this.setState(function(previousState, currentProps) {
      return { score: event.payload.score + previousState.score };
    });
  }
}

