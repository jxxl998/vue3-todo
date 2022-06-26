/**
 * 定义各种类型
 */

interface ITodo {
  id: number,   // 时间戳
  content: string,
  status: TODO_STATUS   // 枚举型，降低字符串的维护
}

// 定义state的类型
interface IState {
  list: ITodo[]
}

enum TODO_STATUS {
  UNDO = 'undo',
  DOING = 'doing',
  FINISHED = 'finished'
}

// 直接导出
export {
  ITodo,
  IState,
  TODO_STATUS
}