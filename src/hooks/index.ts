/**
 * 集中管理解决方案
 */

// import store from "@/store"  不是在引入本地定义的store 而是导入的vuex store
import { SET_TODO } from "@/store/actionTypes"
import { ITodo, TODO_STATUS } from "@/typings"
import { Store, useStore } from "vuex"

export interface IUseTodo {
  setTodo: (value: string) => void,
  setTodoList: () => void,
  removeTodo: () => void,
  setStatus: () => void,
  setDoing: () => void,
}

function useTodo(): IUseTodo {

  const store: Store<any> = useStore()    // 从vuex里面直接导入store 类型注解是Store官方的any

  function setTodo(value: string): void {
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.UNDO
    }
    store.dispatch(SET_TODO, todo)    // 调用store里的dispatch 派发 SET_TODO方法 并传入todo项 
  }

  function setTodoList() {

  }

  function removeTodo(): void {

  }

  function setStatus(): void {

  }

  function setDoing(): void {

  }

  return {
    setTodo,    // 把input输入框的内容设置到state的list
    setTodoList,    // 刷新读取localStorage的list
    removeTodo,   // 移除
    setStatus,    // 更改todo的状态
    setDoing,   // 正在做

  }
}

export {
  useTodo
}