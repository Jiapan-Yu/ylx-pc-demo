import React, { Component } from 'react'
import { Button } from 'antd'
import './index.less'

export default class ProductItem extends Component {
	render() {
		const { width = 270 } = this.props
		return (
			<div className='products-wrap' style={{ width: width }}>
				<img src="http://m.tuniucdn.com/filebroker/cdn/olb/8b/29/8b2963f1e2ad78837e079442feaf0ad5_w450_h300_c1_t0.jpg" alt="" />
				<div className='base-box'>
					<div className="product-name">&lt;华东五市-苏州园华东五市-苏州园林-杭州苏州园林-杭州-乌镇双动5日游&gt;</div>
					<div>
						<div><span className='price'>¥<span className='sup'>1280</span></span>起</div>
						<Button className="btn">立即抢购</Button>
					</div>
				</div>
			</div>
		)
	}
}
