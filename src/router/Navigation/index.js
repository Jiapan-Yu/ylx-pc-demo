import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import navigation from './navigation.json'
import { withRouter } from 'react-router-dom'
import './index.less'

class Navigation extends Component {
	render() {
		const { location: { pathname } } = this.props
		let curr = navigation.filter(({ path }) => path.substr(1) && pathname.indexOf(path.substr(1)) > -1)
		let currPath = curr[0] ? curr[0].path : '/'
		return (
			<div>
				<div className="top-box">
					<div>
						<span>登陆/注册</span>
						<span>订单查询</span>
						<span>退票改签</span>
					</div>
				</div>

				<div className="logo-seach-box">
					<div className="logo" />
					<div className='city-box'>
						<div>当前城市</div>
						<div className='city'>武汉 <Icon type="down" /></div>
					</div>
					<div className='search-box'>
						<div className='type'>周边游<Icon type="caret-down" /></div>
						<input type="text" placeholder='请输入景点、主题、目的地' />
						<Icon className='search-btn' type="search" />
					</div>
					<div className="customer-box">
						<div><Icon type="phone" />4009-646-567</div>
						<div><Icon type="user" />在线客服</div>
					</div>
				</div>
				<div className="menu-list">
					<Menu
						mode="horizontal"
						defaultSelectedKeys={[currPath]}
						style={{ lineHeight: '40px' }}
					>
						{
							navigation.map(({ name, path }) => (
								<Menu.Item onClick={() => this.props.history.push(path)} key={path}>{name}</Menu.Item>
							))
						}
					</Menu>
				</div>
			</div>
		)
	}
}
export default withRouter(Navigation)