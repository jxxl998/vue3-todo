import { IState, ITodo } from "@/typings";
import { SET_TODO } from "./actionTypes";

/**
 * 定义mutations 直接state做更改
 * 从commit()接收两个参数，一个是state，另一个是改动的数据
 */
export default {
  [SET_TODO](state: IState, todo: ITodo): void {
    state.list.unshift(todo)
    console.log(state.list)
  }
}