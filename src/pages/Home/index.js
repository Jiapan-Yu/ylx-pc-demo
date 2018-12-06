import React, { Component } from 'react'
import { Button } from 'antd'
import moment from 'moment'
import { inject, observer } from 'mobx-react'
import './index.less'

@inject('testStore')
@observer
class App extends Component {

	render() {
		const { num } = this.props.testStore
		return (
			<div className="App">
				<Button onClick={() => this.props.testStore.add()} type="primary">Button</Button>
				{num}
				<div className='teee'>{moment().format('dddd')}</div>
				<i className="iconfont">&#xe683;</i>
			</div>
		)
	}
}

export default App