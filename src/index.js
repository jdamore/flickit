'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Configuration from 'configuration';
import App from './app';

ReactDom.render(
	<App lexicon={Configuration.lexicon.en} />,
	document.getElementById('app')
);