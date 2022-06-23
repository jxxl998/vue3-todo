// index.ts 就相当于出口 集中管理state、mutations、actions
// 嗯？ 这里感觉好像redux哇
import { createStore } from 'vuex'

import  state from "./state";
import  mutations from "./mutations";
import  actions from './actions'

export default createStore({
  state,
  mutations,
  actions
})
