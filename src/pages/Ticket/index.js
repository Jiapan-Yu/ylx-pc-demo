import React, { Component } from 'react'
import Carousel from '../../common/Carousel'
import Stencil from '../../common/Stencil'

export default class Ticket extends Component {
	render() {
		return (
			<div>
				<Carousel />
				<Stencil type={4} />
				<Stencil type={4} />
				<Stencil type={4} />
				<img className='publicize-horizontal' src="http://image.yjylx.com/ec/images/banner/index/b1.png" alt="" />
			</div>
		)
	}
}
