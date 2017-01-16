'use strict'

import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

import Card from '../card'
import Scoreboard from '../scoreboard'
import styles from './index.scss'

const App = ({ lexicon, score, onScorePoints }) => (
  <div id='app' name='app' className={styles.container}>
    <Scoreboard score={score} />
    <div id='deck' name='deck' className={styles.deck}>
      {lexicon.map((word, i) =>
          <div id={'card-container-'+word} name='card-container' className={styles.card + ' ' + (i===0?styles.firstcard:'')} >
            <Card word={word} score={42} onScorePoints={onScorePoints}/>
          </div>
      )}
    </div>
  </div>
)

App.propTypes = { 
  lexicon: PropTypes.array.isRequired, 
  score: PropTypes.number.isRequired,
  onScorePoints: PropTypes.func.isRequired 
}

App.defaultProps = { 
  lexicon: [ { word: 'loremipsum' }, { word: 'dolor' }, { word: 'sitamet' }, { word: 'consectetuer' } ], 
  score: 0,
  onScorePoints: function() {}
}

export default App


