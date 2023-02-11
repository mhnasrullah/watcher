import { StateType } from "./interface"

export default {
    plusTen(state : StateType){
        return state.count + 10
    }
}