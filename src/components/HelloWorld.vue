<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ msg: string }>();

console.log(props);

const a = 1;
const b = ref(2);

// 使用了 <script setup> 的组件是默认私有的，一个父组件无法访问到一个私有子组件中的任何东西，除非子组件通过 defineExpose 宏显式暴露
defineExpose({ a, b });

// 使用 defineEmits 宏来声明需要抛出的事件
const emit = defineEmits<{
  (event: 'trigger', text: string): void;
}>();

console.log(emit);
</script>

<template>
  <div class="greetings">
    <h1 class="green" @click="$emit('trigger', 'Hello Vue3')">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  top: -10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 2.6rem;
}
.greetings h1 {
  text-align: center;
}
@media (min-width: 1024px) {
  .greetings h1 {
    text-align: left;
  }
}
</style>
