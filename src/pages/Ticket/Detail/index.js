import React, { Component } from 'react'
import './index.less'

const infoList = ['预订须知', '景点介绍', '交通信息']
class TicketDetail extends Component {
	state = {
		menuIndex: 0
	}

	componentDidMount() {
		window.addEventListener('scroll', this.scrollHandler)
	}

	scrollHandler = () => {
		const t = document.documentElement.scrollTop || document.body.scrollTop
		let topId, info0, info1, info2 = 0
		topId = document.getElementById('info0')

		if (topId) { // 能不能被滚动
			info0 = document.getElementById('info0') ? document.getElementById('info0').offsetTop - 75 : 0
			info1 = document.getElementById('info1') ? document.getElementById('info1').offsetTop - 75 : 0
			info2 = document.getElementById('info2') ? document.getElementById('info2').offsetTop - 75 : 0

			if (t >= info0 && t < info1) {
				this.setState({
					menuIndex: 0
				})
			} else if (t >= info1 && t < info2) {
				this.setState({
					menuIndex: 1
				})
			} else if (t >= info2) {
				this.setState({
					menuIndex: 2
				})
			}
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollHandler)
	}

	render() {
		const { menuIndex } = this.state
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

				<div id="infolist" className="info">
					{infoList.map((value, i) => {
						return <span key={i} className={`item ${menuIndex === i ? 'curr' : ''}`}>{value}</span>
					})}
				</div>
				<div><br />
					<div id="info0" className="info-title">预订须知</div>
					<br />
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut,
		placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, non-
		ummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue eu neque. Pellentesque
		habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo.
		Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus
		eu tellus sit amet tortor gravida placerat. Integer sapien est, iaculis in, pretium quis, viverra
		ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla,
		malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
		eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit
	amet orci dignissim rutrum.<br /><br />

					Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non
				justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed
				accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et
				nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis
				natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt
urna. Nulla ullamcorper vestibulum turpis. Pellentesque cursus luctus mauris.<br /><br />

					Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tris-
					tique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus
					adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae,
					placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec,
					suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed
					lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent
					euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec
et mi. Nam vulputate metus eu enim. Vestibulum pellentesque felis eu massa.<br /><br />

					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut,
						placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, non-
						ummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue eu neque. Pellentesque
						habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo.
						Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus
						eu tellus sit amet tortor gravida placerat. Integer sapien est, iaculis in, pretium quis, viverra
						ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla,
						malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
						eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit
	amet orci dignissim rutrum.<br /><br />

					Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non
				justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed
				accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et
				nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis
				natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt
urna. Nulla ullamcorper vestibulum turpis. Pellentesque cursus luctus mauris.<br /><br />

					Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tris-
					tique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus
					adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae,
					placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec,
					suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed
					lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent
					euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec
et mi. Nam vulputate metus eu enim. Vestibulum pellentesque felis eu massa.<br /><br />

					<div id="info1" className="info-title">景点介绍</div>
					<br />
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut,
						placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, non-
						ummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue eu neque. Pellentesque
						habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo.
						Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus
						eu tellus sit amet tortor gravida placerat. Integer sapien est, iaculis in, pretium quis, viverra
						ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla,
						malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
						eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit
	amet orci dignissim rutrum.<br /><br />

					Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non
				justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed
				accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et
				nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis
				natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt
urna. Nulla ullamcorper vestibulum turpis. Pellentesque cursus luctus mauris.<br /><br />

					Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tris-
					tique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus
					adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae,
					placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec,
					suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed
					lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent
					euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec
et mi. Nam vulputate metus eu enim. Vestibulum pellentesque felis eu massa.<br /><br />

					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut,
						placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, non-
						ummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue eu neque. Pellentesque
						habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo.
						Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus
						eu tellus sit amet tortor gravida placerat. Integer sapien est, iaculis in, pretium quis, viverra
						ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla,
						malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
						eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit
	amet orci dignissim rutrum.<br /><br />

					Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non
				justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed
				accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et
				nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis
				natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt
urna. Nulla ullamcorper vestibulum turpis. Pellentesque cursus luctus mauris.<br /><br />

					Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tris-
					tique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus
					adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae,
					placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec,
					suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed
					lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent
					euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec
et mi. Nam vulputate metus eu enim. Vestibulum pellentesque felis eu massa.<br /><br />

					<div id="info2" className="info-title">交通信息</div>
					<br />
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut,
						placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, non-
						ummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue eu neque. Pellentesque
						habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo.
						Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus
						eu tellus sit amet tortor gravida placerat. Integer sapien est, iaculis in, pretium quis, viverra
						ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla,
						malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
						eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit
	amet orci dignissim rutrum.<br /><br />

					Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non
				justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed
				accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et
				nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis
				natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt
urna. Nulla ullamcorper vestibulum turpis. Pellentesque cursus luctus mauris.<br /><br />

					Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tris-
					tique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus
					adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae,
					placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec,
					suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed
					lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent
					euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec
et mi. Nam vulputate metus eu enim. Vestibulum pellentesque felis eu massa.<br /><br />

					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut purus elit, vestibulum ut,
						placerat ac, adipiscing vitae, felis. Curabitur dictum gravida mauris. Nam arcu libero, non-
						ummy eget, consectetuer id, vulputate a, magna. Donec vehicula augue eu neque. Pellentesque
						habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut leo.
						Cras viverra metus rhoncus sem. Nulla et lectus vestibulum urna fringilla ultrices. Phasellus
						eu tellus sit amet tortor gravida placerat. Integer sapien est, iaculis in, pretium quis, viverra
						ac, nunc. Praesent eget sem vel leo ultrices bibendum. Aenean faucibus. Morbi dolor nulla,
						malesuada eu, pulvinar at, mollis ac, nulla. Curabitur auctor semper nulla. Donec varius orci
						eget risus. Duis nibh mi, congue eu, accumsan eleifend, sagittis quis, diam. Duis eget orci sit
	amet orci dignissim rutrum.<br /><br />

					Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non
				justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed
				accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et
				nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis
				natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt
urna. Nulla ullamcorper vestibulum turpis. Pellentesque cursus luctus mauris.<br /><br />

					Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tris-
					tique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante. Phasellus
					adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae,
					placerat a, molestie nec, leo. Maecenas lacinia. Nam ipsum ligula, eleifend at, accumsan nec,
					suscipit a, ipsum. Morbi blandit ligula feugiat magna. Nunc eleifend consequat lorem. Sed
					lacinia nulla vitae enim. Pellentesque tincidunt purus vel magna. Integer non enim. Praesent
					euismod nunc eu purus. Donec bibendum quam in tellus. Nullam cursus pulvinar lectus. Donec
et mi. Nam vulputate metus eu enim. Vestibulum pellentesque felis eu massa.</div>
			</div>
		)
	}
}

export default TicketDetail
