import {ActionCtx} from './interface'

export default {
    AsyncIncrement({commit} : ActionCtx){
        commit('increment')
    }
}