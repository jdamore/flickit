'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

class Scoreboard extends React.Component {

  constructor() {
    super();
    this.state = { score: 0 };
  }

  render() {
    return (
      <div name='scoreboard' className={styles.container}>
     	<div name='score-label' className={styles.label}>Score</div>
     	<div name='score-value' className={styles.value}>{this.state.score}</div>
      </div>
    );
  }
}

module.exports = Scoreboard;

