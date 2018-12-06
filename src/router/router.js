import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import './index.less'
import Home from '../pages/Home'

const { Header, Content, Footer } = Layout
export default class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Layout className="layout">
					<Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#fff', padding: '0px 0px' }}>
						<div className="logo" />
						<Menu
							mode="horizontal"
							defaultSelectedKeys={['1']}
							style={{ lineHeight: '64px' }}
						>
							<Menu.Item key="1">首页</Menu.Item>
							<Menu.Item key="2">周边游</Menu.Item>
							<Menu.Item key="3">国内游</Menu.Item>
							<Menu.Item key="4">出境游</Menu.Item>
							<Menu.Item key="5">景点</Menu.Item>
							<Menu.Item key="6">酒店</Menu.Item>
							<Menu.Item key="7">机票</Menu.Item>
							<Menu.Item key="8">火车票</Menu.Item>
						</Menu>
					</Header>
					<Content style={{ marginTop: 64 }}>
						<div style={{ background: '#fff', padding: 24, minHeight: 880 }}>
							<Switch>
								<Route path='/' component={Home} />
							</Switch>
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</BrowserRouter>
		)
	}
}