'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import Configuration from 'configuration';
import App from './containers/app';

ReactDom.render(
	<App numCards="4" lexicon={Configuration.lexicon.en}/>,
	document.getElementById('app')
);