import { configure } from 'mobx'
import DefaultStore from './default'
import ManageStore from './manage'
import UserStore from './user'

// 只允许 内部改变 state
configure({ enforceActions: 'observed' })

class Store {
	constructor() {
		this.defaultStore = new DefaultStore(this);
		this.manageStore = new ManageStore(this);
		this.userStore = new UserStore(this);
	}
}


export default Store