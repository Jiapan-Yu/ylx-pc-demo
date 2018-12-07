import React, { Component } from 'react'
import { Pagination } from 'antd'
import RouteItem from './RouteItem'
import './index.less'

export default class RouteList extends Component {
	render() {
		return (
			<div className='route-list-wrap'>
				<RouteItem />
				<RouteItem />
				<RouteItem />
				<RouteItem />
				<RouteItem />
				<RouteItem />
				<RouteItem />
				<div className="pagination-wrap">
					<Pagination hideOnSinglePage defaultCurrent={1} total={500} onChange={pageNumber => console.log(pageNumber)} />
				</div>
			</div>
		)
	}
}
