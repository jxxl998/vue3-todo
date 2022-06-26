### 关于 Vuex 工作流

运行规则：

1. 组件 -> dispatch -> actions
2. dispatch -> type(actionType) -> 某一个 action
3. action -> commit 调用 -> mutation
4. mutation -> change -> state
5. render 方案: state -> 数据流 -> 视图 （响应式自动完成）

以上是闭环(本质上是方法)

actions 有时候是一些异步的操作
每一次更改都是事件驱动的

#### 文件集合

因此需要单独开发以下步骤：

- actionType： action 的类型
- actions： 调用 mutation 的方法
- mutations： 改变 state 的方法
- state： 中央数据管理池
- store 出口： 以上的 actions、mutations、state 统一到仓库进行管理

### Todo List 的组件划分

- TodoList

1.  TodoInput 输入的组件
2.  TodoList 列表组件
    - 内部有很多 TodoItem 列表项
      1. 完成/未完成 checkbox
      2. delete 删除 button
      3. 正在做的确认按钮 button

### 建立目录结构

创建组件，可能一个组件有多个组件，默认出口是 index，

```shell
src/components/TodoInput/index.vue
src/components/TodoList/index.vue
                       /Item.vue

src/typings/index       # 类型定义
src/hooks/index         # 集中管理公共方法/解决方案，调用vuex的方法


# Vuex
src/store/actions       # 定义actions的commit()
src/store/index         # 定义整个vuex的store出口
src/store/mutations     # 定义改变state的方法
src/store/actionTypes   # 定义派发action的类型 使用字符串
src/store/state         # 定义state类型
```

### about Vue3

如果根目录 App.vue 是使用 vue3 的推导式 则其所有子组件都要添加`lang="ts"` 以及引入 `import { defineComponent } from 'vue';`


