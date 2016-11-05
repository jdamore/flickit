'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import Configuration from 'configuration';
import Card from './card';

ReactDom.render(
	<Card front={'benevole'} back={12} />,
	document.getElementById('app')
);