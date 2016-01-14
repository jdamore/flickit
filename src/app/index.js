'use strict';

import Ajax from '../infra/ajax';
import Utils from '../infra/utils';

import React from 'react';
import Card from './card';
import styles from './index.scss';

class App extends React.Component {

  constructor() {
    super();
    this.setAjax = this._ajax.bind(this);
    this.ajax = null;
  }

	render() {
		let cards = [];
		for (var i = 0; i < this.props.numCards; i++) {
  			cards.push(<li><Card key={i} id={i}/></li>);
		}
    return <ul id='deck' className={styles.container}>{cards}</ul>;
	}

  componentWillMount() {
  	if(this.ajax===null) {
  		this.ajax = new Ajax("http://www.google.com");
  	}
    this.ajax.get(function(){}, function(){});
  }

	_ajax(ajax) {
		this.ajax = ajax;
	}
}

module.exports = App;