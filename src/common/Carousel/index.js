import React, { Component } from 'react'
import { Carousel } from 'antd'
import './index.less'

export default class CarouselComponent extends Component {
	render() {
		return (
			<Carousel className='carousel' autoplay>
				<div><img src="https://img.yjylx.com/images/bg/formal/homepage/1532597091958fp87a7.png" alt="" /></div>
				<div><img src="https://img.yjylx.com/images/bg/formal/homepage/1538029835535ogyk18.png" alt="" /></div>
				<div><img src="https://img.yjylx.com/images/bg/formal/homepage/1540266277248ak5zj0.png" alt="" /></div>
				<div><img src="https://img.yjylx.com/images/bg/formal/homepage/15414857383293fz5w2.png" alt="" /></div>
			</Carousel>
		)
	}
}
