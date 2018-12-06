import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.less'
import Login from '../pages/Login'
import Navigation from './navigation'

export default class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/login' component={Login} />
					<Navigation />
				</Switch>
			</BrowserRouter>
		)
	}
}