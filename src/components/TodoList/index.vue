<template>
  <div>
    <h1>Todo-List</h1>
    <TodoItem />
  </div>
</template>

<script lang="ts">
import TodoItem from "./Item";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem,
  },
});
</script>
