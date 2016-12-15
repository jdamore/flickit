'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import Configuration from 'configuration';
import Card from './card';

ReactDom.render(
	<Card front={'Flipit'} back={12} />,
	document.getElementById('app')
);