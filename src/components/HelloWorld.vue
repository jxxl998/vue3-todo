<template>
  <div class="hello">
    <span>{{ count }}</span>

    <p>
      <button @click="plus">+</button>&nbsp;
      <button @click="minus">-</button>
    </p>
  </div>
</template>

<!-- <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Counter",
  props: {
    msg: String,
  },
});
</script> -->

<!-- vue2 -->
<!-- <script>
export default {
  name: "counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    plus() {
      this.count++;
    },
    minus() {
      this.count--;
    },
  },
};
</script> -->

<!-- vue3 -->
<!-- 基于函数  -->
<script>
import { ref } from "vue";

// 抽离
const useCompute = (count) => {
  const plus = () => {
    count.value++;
  };

  const minus = () => {
    count.value--;
  };

  return {
    plus,
    minus,
  };
};

export default {
  name: "counter",
  setup() {
    const count = ref(0),
      { plus, minus } = useCompute(count);

    // 在setup里面声明的变量以及方法都要return出去 前提是知道要使用这些数据
    return {
      count,
      minus,
      plus,
    };
  },
};
</script>
