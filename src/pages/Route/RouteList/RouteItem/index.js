import React, { Component } from 'react'
import { Button } from 'antd'
import './index.less'

export default class RouteItem extends Component {
	render() {
		return (
			<div className='route-item-wrap'>
				<img src="http://m.tuniucdn.com/fb2/t1/G5/M00/0E/EF/Cii-s1sGFeqIF0isAAjIb_PHmskAAHRKwKZGnkACMiH229_w450_h300_c1_t0.jpg" alt=""/>
				<div className="base-info">
					<div className="goods-name"> 桂林-阳朔-古东-漓江-银子岩双高5日游 武汉高铁往返，纯玩0购物，赏BBC漓江渔火，2晚阳朔，古东千亩枫林赏秋，升级高档型酒店</div>
					<div className='badge-list'>
						<span>跟团游</span>
						<span>国内长线</span>
					</div>
					<div className='detail-item'>
						<span className="tips">行程天数：</span>
						<span>4天3晚</span>
					</div>
					<div className='detail-item'>
						<span className="tips">去程交通：</span>
						<span>自行安排</span>
						<span className="tips">返程交通：</span>
						<span>自行安排</span>
					</div>
					<div className='detail-item'>
						<span className="tips">成团地点：</span>
						<span></span>
					</div>
				</div>
				<div className="operational">
					<div><span className="price">¥<span className='sup'>2556</span></span>起</div>
					<Button className="btn">查看详情</Button>
				</div>
			</div>
		)
	}
}
