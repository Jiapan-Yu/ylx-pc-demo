const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = function override(config, env) {
	config = rewireReactHotLoader(config, env)
	config = injectBabelPlugin(["@babel/plugin-proposal-decorators", { legacy: true }], config)
	config = injectBabelPlugin(
		['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
		config,
	)
	config = rewireLess.withLoaderOptions({
		modifyVars: { "@primary-color": "#6ECBC8" },
		javascriptEnabled: true
	})(config, env)
	return config
}