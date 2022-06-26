<template>
    <div>
        <h1>Todo Input Component</h1>
        <input type="text" v-model="todoValue" @keyup="setTodoValue" />
        <hr />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IUseTodo, useTodo } from '@/hooks/index';

export default defineComponent({
    name: 'TodoInput',
    setup() {
        const todoValue = ref<string>('');
        const { setTodo }: IUseTodo = useTodo();
        // ? 这个useTodo是一个方法 执行这个方法后 会返回一个对象 再对该对象进行解构
        // 注意解构出来也需要类型注解

        const setTodoValue = (e: KeyboardEvent) => {
            if (e.keyCode === 13 && todoValue.value.trim().length) {
              // console.log('keyup')
                setTodo(todoValue.value);
                todoValue.value = '';
            }
        };

        return {
            todoValue,
            setTodoValue,
        };
    },
});
</script>
