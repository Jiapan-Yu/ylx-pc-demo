import React, { Component } from 'react'
import './index.less'

class TicketDetail extends Component {
	state = {}
	render() {
		return (
			<div className="ticket-detail-wrap">
				<div className="ticket-detail-top">
					<img src={require('../../../images/ticket_detail.jpg')} alt="图片" />
					<div className="desc">
						<div className="title">楚天瑶池温泉度假村</div>

						<div className="bgcolor">
							<div className="price">价　　格： ¥ 118起</div>
						</div>
						<div className="location">具体地址： 湖北省咸宁市温泉路3号&nbsp;&nbsp;&nbsp;查看地图<i className="iconfont">&#xec3f;</i></div>
						<div className="open-time">开放时间：11:00-23:00</div>
						<div className="quote">
						</div>
					</div>
				</div>

				<div className="ticket-detail-middle">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut,
	placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, non-
	ummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue eu neque. Pellentesque
	habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo.
	Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus
	eu tellus sit amet tortor gravida placerat. Integer sapien est, iaculis in, pretium quis, viverra
	ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla,
	malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
	eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit
	amet orci dignissim rutrum.

	Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non
justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed
accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et
nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis
natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt
urna. Nulla ullamcorper vestibulum turpis. Pellentesque cursus luctus mauris.

Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tris-
tique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus
adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae,
placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec,
suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed
lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent
euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec
et mi. Nam vulputate metus eu enim. Vestibulum pellentesque felis eu massa.
				</div>
			</div>
		)
	}
}

export default TicketDetail
