import React, { Component, Fragment } from 'react'
import ProductItem from '../ProductItem'
import Destination from '../Destination'
import './index.less'

export default class Stencil extends Component {

	renderContent = () => {
		const { type } = this.props
		if (type === 1) {
			return <Fragment>
				<ProductItem width={568} />
				<ProductItem width={568} />
			</Fragment>
		} else if (type === 2) {
			return <Fragment>
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</Fragment>
		} else if (type === 3) {
			return <Fragment>
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</Fragment>
		} else if (type === 4) {
			return <Fragment>
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</Fragment>
		}
	}

	render() {
		const { type } = this.props
		return (
			<div className='stencil-wrap' style={type === 3 || type === 4 ? { height: 680 } : {}}>
				<div className="top-menu">
					<div className="title">
						<img src={require('../../images/Slice.png')} alt="" />
						活动精选
					</div>
					<div className="menu-list-box">
						<div className="active">周边精选</div>
						<div>国内精选</div>
						<div>出境精选</div>
					</div>
					<div className="more">更多特价 》</div>
				</div>
				<div className="content-box">
					{
						type === 3 &&
						<Destination />
					}
					{
						type === 4 &&
						<img className='publicize-vertical' src="https://img.yjylx.com/images/bg/formal/homepageName/15307582571169hdpvo.png" alt="" />
					}
					<div className="content">
						{this.renderContent()}
					</div>
					{
						type === 3 &&
						<img className='publicize-vertical' src="https://img.yjylx.com/images/bg/formal/homepageName/15307582571169hdpvo.png" alt="" />
					}
				</div>
			</div>
		)
	}
}
