'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import QueryString from 'query-string';

import Lexicon from './lexicon';
import App from './app';

let qs = QueryString.parse(location.search);

ReactDom.render(
	<App lexicon={Lexicon[qs.lexicon]} />,
	document.getElementById('app')
);