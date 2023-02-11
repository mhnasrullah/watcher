import { ActionContext } from "vuex"

export interface StateType {
    count : number
}

export type ActionCtx = ActionContext<StateType,StateType>