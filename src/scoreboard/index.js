'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

export default class Scoreboard extends React.Component {

  constructor() {
    super();
  }
 
  render() {
    return (
      <div id='scoreboard' name='scoreboard' className={styles.scoreboard}>
      	{this.props.score}
      </div>
    );
  }

}

Scoreboard.propTypes = { score: React.PropTypes.number };
Scoreboard.defaultProps = { score: 0 };