
if (process.env.NODE_ENV === 'development') {
	global.memberBaseUrl = 'https://member-test.yjylx.com'

	global.trainBaseUrl = 'https://train-test.yjylx.com'

	global.flightBaseUrl = 'https://flight-test.yjylx.com'

	global.tourBaseUrl = 'https://tour-test.yjylx.com'

	global.payBaseUrl = 'https://pay-test.yjylx.com'
} else {
	global.memberBaseUrl = 'http://member.yjylx.com'

	global.trainBaseUrl = 'http://open.train.yjylx.com'

	global.flightBaseUrl = 'http://open.flight.yjylx.com'

	global.tourBaseUrl = 'https://tour.yjylx.com'

	global.payBaseUrl = 'http://pay.yjylx.com'
}