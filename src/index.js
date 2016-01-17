'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import Configuration from 'configuration';
import App from './app';

ReactDom.render(<App numCards="1" lexicon={Configuration.lexicon}/>, document.getElementById('app'));