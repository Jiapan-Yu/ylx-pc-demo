import React, { Component } from 'react'
import './index.less'
import { Row, Col } from 'antd'

class Grid extends Component {
	render() {
		return (
			<div className="gutter-example">
				<Row gutter={40}>
					<Col className="gutter-row" span={12}>
            <div className="gutter-box">col-12</div>
          </Col>
					<Col className="gutter-row" span={12}>
            <div className="gutter-box">col-12</div>
          </Col>
				</Row>
				<Row>
					<Col className="gutter-row" span={8}>
            <div className="gutter-box">col-8</div>
          </Col>
					<Col className="gutter-row" span={8}>
            <div className="gutter-box">col-8</div>
          </Col>
					<Col className="gutter-row" span={8}>
            <div className="gutter-box">col-8</div>
          </Col>
				</Row>
				<Row>
					<Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
					<Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
					<Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
					<Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
				</Row>
			</div>
		)
	}
}

export default Grid
