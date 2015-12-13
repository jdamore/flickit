'use strict';

import React from 'react';
import Card from './card';
import styles from './index.scss'

class App extends React.Component {

	render() {

		let cards = [];
		for (var i = 0; i < this.props.numCards; i++) {
  			cards.push(<Card key={i} id={i}/>);
		}

    	return <div id='deck' className={styles.container}>
    	    {cards}
    	</div>;
	
	}
}

module.exports = App;