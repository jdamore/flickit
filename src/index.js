'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import Configuration from 'configuration';
import App from './app';

console.log("App: Lexicon=" + Configuration.lexicon);
ReactDom.render(<App numCards="1"/>, document.getElementById('app'));