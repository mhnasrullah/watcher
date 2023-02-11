import {createStore} from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import { StateType } from './interface'

const store = createStore<StateType>({
    state,
    mutations,
    actions,
    getters
})

export default store