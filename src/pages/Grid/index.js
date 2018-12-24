import React, { Component } from 'react'
import './index.less'
import { Row, Col } from 'antd'

class Grid extends Component {
	render() {
		return (
			<div>
				<p>sub-element align</p>
				<Row type="flex" justify="space-around">
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
					<Col span={4}>col-4</Col>
				</Row>
			</div>
		)
	}
}

export default Grid
