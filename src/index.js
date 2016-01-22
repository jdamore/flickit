'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { play } from './infra/reducers';

import Configuration from 'configuration';
import App from './app';

ReactDom.render(
	<Provider store={createStore(play)}>
		<App numCards="4" lexicon={Configuration.lexicon.en}/>
	</Provider>, 
document.getElementById('app'));