import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import Home from '../pages/Home'
import Flight from '../pages/Flight'
import Hotel from '../pages/Hotel'
import RoutePage from '../pages/Route'
import Ticket from '../pages/Ticket'
import Train from '../pages/Train'
import navigation from './navigation.json'

const { Header, Content, Footer } = Layout
class Navigation extends Component {
	render() {
		const { location: { pathname } } = this.props
		return (
			<Layout className="layout">
				<Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#fff', padding: '0px 0px' }}>
					<div className="logo" />
					<Menu
						mode="horizontal"
						defaultSelectedKeys={[pathname]}
						style={{ lineHeight: '64px' }}
					>
						{
							navigation.map(({ name, path }) => (
								<Menu.Item onClick={() => this.props.history.push(path)} key={path}>{name}</Menu.Item>
							))
						}
					</Menu>
				</Header>
				<Content style={{ marginTop: 64 }}>
					<div style={{ background: '#fff', padding: 24, minHeight: 880 }}>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/flight' component={Flight} />
							<Route path='/hotel' component={Hotel} />
							<Route path='/route/:type' component={RoutePage} />
							<Route path='/ticket' component={Ticket} />
							<Route path='/train' component={Train} />
						</Switch>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		)
	}
}
export default withRouter(Navigation)