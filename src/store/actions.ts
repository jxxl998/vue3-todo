import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { SET_TODO } from "./actionTypes";

/**
 * 定义actions
 * 作用是为了调用mutations的commit()
 */

interface ICtx {
  commit: Commit,
  state: IState
}

export default {
  [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
    commit(SET_TODO, todo)
  }
}