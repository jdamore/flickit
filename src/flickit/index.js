import React from 'react';
import styles from './index.css'

module.exports = React.createClass({

	onClick: function(event) {
    document.getElementById('card').classList.toggle('flip')
  },

  render: function() {
  	return (
  		<div id="card" onClick={this.onClick} className={styles.container}>
  				<div className={styles.flipper}>
  					<div className={styles.front}>Flick Me !</div>
  					<div className={styles.back}>Score: 10/10</div>
  				</div>
  		</div>
  		);
  }

});