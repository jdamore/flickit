'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import AppContainer from './containers'

let store = createStore(reducers)

ReactDom.render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>,
	document.getElementById('app')
)