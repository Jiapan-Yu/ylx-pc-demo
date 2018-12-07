import React, { Component } from 'react'
import Carousel from '../../common/Carousel'
import Stencil from '../../common/Stencil'
import './index.less'

class Home extends Component {

	render() {
		return (
			<div className="home-page-wrap">
				<Carousel />
				<Stencil type={1} />
				<Stencil type={2} />
				<Stencil type={3} />
				<Stencil type={3} />
				<Stencil type={3} />
			</div>
		)
	}
}

export default Home