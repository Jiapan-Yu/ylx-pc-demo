import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import './iconfont/iconfont.css'
import Router from './router/router'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import stores from './stores'
import 'moment/locale/zh-cn'

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Provider {...stores}>
				<Component></Component>
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	)
}

render(Router)

if (module.hot) {
	module.hot.accept('./router/router.js', () => {
		render(Router)
	})
}