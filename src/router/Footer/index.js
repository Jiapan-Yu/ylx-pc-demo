import React, { Component } from 'react'
import './index.less'

export default class Footer extends Component {
	render() {
		return (
			<div className='foot-box'>
				<div className="top-box">
					<div className="top">
						<div>
							<img src="http://image.yjylx.com/ec/images/common/piao.png" alt="" />
							购票保障
						</div>
						<div>
							<img src="http://image.yjylx.com/ec/images/common/chu.png" alt="" />
							出行保障
						</div>
						<div>
							<img src="http://image.yjylx.com/ec/images/common/ticket.png" alt="" />
							标准退改签
						</div>
						<div>
							<img src="http://image.yjylx.com/ec/images/common/baohu.png" alt="" />
							隐私保障
						</div>
						<div>
							<img src="http://image.yjylx.com/ec/images/common/after.png" alt="" />
							售后无忧
						</div>
					</div>
				</div>
				<div className="bottom">
					<div className="content">
						<div>
							<div className="title">旅行产品</div>
							<div>国内机票</div>
							<div>国际机票</div>
							<div>客栈公寓</div>
							<div>旅游度假</div>
							<div>酒店预订</div>
							<div>景点门票</div>
						</div>
						<div>
							<div className="title">商家服务</div>
							<div>商家入驻</div>
							<div>帮派互动</div>
							<div>商家培训</div>
							<div>规则中心</div>
							<div>规则意见征集</div>
						</div>
						<div>
							<div className="title">热门推荐</div>
							<div>婺源</div>
							<div>张家界</div>
							<div>九宫山</div>
							<div>武当山</div>
						</div>
						<div>
							<div className="title">新手上路</div>
							<div>免费注册</div>
							<div>退票改签</div>
							<div>开通支付宝</div>
							<div>7*24小时在线帮助</div>
							<div>门票使用</div>
							<div>常见问题</div>
						</div>
						<div className='qrcode'>
							<img src="http://image.yjylx.com/ec/images/common/erweima.jpg" alt="" />
							<div>扫一扫，关注微信公众号</div>
							<div>更多优惠，等你来拿</div>
							<div>商家热线：4009-646-567</div>
						</div>
					</div>
					<div className='copy-right'>Copyright © 2017 yjylx.com All Rights Reserved.Power by yjylx Inc. 鄂ICP备16019823号</div>
				</div>
			</div>
		)
	}
}
