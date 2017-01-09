'use strict'

import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styles from './index.scss'

const Scoreboard = ({ score }) => (
  <div id='scoreboard' name='scoreboard' className={styles.scoreboard}>
        {score}
  </div>
)

Scoreboard.propTypes = { score: PropTypes.number.isRequired }
Scoreboard.defaultProps = { score: 0 }

export default Scoreboard