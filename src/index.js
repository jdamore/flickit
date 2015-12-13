'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

ReactDom.render(<App numCards="4"/>, document.getElementById('app'));