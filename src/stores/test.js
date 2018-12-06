import { observable, action } from 'mobx'

class TestStore {
	@observable num = 10

	@action add() {
		this.num = this.num + 1
	}
}

export default new TestStore()