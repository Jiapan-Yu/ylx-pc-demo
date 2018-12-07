import React, { Component } from 'react'
import './index.less'

export default class Destination extends Component {
	render() {
		return (
			<div className='destination-wrap'>
				<div className="destination-box">
					<div className="title">特色主题</div>
					<div className="destination-item-box">
						<div>温泉</div>
						<div>古镇</div>
						<div>山水</div>
						<div>美食</div>
					</div>
				</div>
				<div className="destination-box">
					<div className="title">热门目的地</div>
					<div className="destination-item-box">
						<div>宜昌</div>
						<div>恩施</div>
						<div>神农架</div>
						<div>张家界</div>
						<div>峨眉山</div>
						<div>三清山</div>
					</div>
				</div>
				<div className="destination-box">
					<div className="title">人气推荐</div>
					<div className="destination-item-box">
						<div>三峡大坝</div>
						<div>黄山</div>
						<div>武当山</div>
						<div>庐山</div>
					</div>
				</div>
				<div className="destination-box">
					<div className="title">周边跟团</div>
					<div className="destination-item-box">
						<div>木兰天池</div>
						<div>木兰草原</div>
						<div>锦里沟</div>
						<div>木兰胜天山庄</div>
					</div>
				</div>
			</div>
		)
	}
}
