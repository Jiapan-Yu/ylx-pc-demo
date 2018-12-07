import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import Navigation from './Navigation'

import Home from '../pages/Home'
import Flight from '../pages/Flight'
import Hotel from '../pages/Hotel'

import RoutePage from '../pages/Route'
import RouteList from '../pages/Route/RouteList'

import Ticket from '../pages/Ticket'
import Train from '../pages/Train'
import Footer from './Footer'

import TicketDetail from '../pages/Ticket/Detail'

const { Content } = Layout
export default class Index extends Component {
	render() {
		return (
			<Layout className="navigation-top-wrap">
				<Navigation />
				<Content style={{ backgroundColor: '#F5F5F5' }}>
					<div style={{ minHeight: 880 }}>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/flight' component={Flight} />
							<Route path='/hotel' component={Hotel} />

							<Route exact path='/route/:type' component={RoutePage} />
							<Route path='/route/:type/list' component={RouteList} />

							<Route exact path='/ticket' component={Ticket} />
							<Route path='/ticket/detail' component={TicketDetail} />

							<Route path='/train' component={Train} />
						</Switch>
					</div>
				</Content>

				<Footer />
				<BackTop />
			</Layout>
		)
	}
}