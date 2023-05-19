<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMouse } from '../hooks/mouse';
import { useFetch } from '../hooks/fetch';

const liRefs = ref([]);

onMounted(() => {
  // 需要注意，ref 数组并不保证与源数组相同的顺序
  console.log(liRefs.value);
});

function fnRef(el) {
  // 当元素被卸载时，函数也会被调用一次，此时 el 为 null
  if (el) {
    console.log((el as HTMLElement).innerText);
  }
}

const { x, y } = useMouse();

const url = ref('');
const { data, error } = useFetch(url);

// 在 <script setup> 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令
const vFocus = {
  mounted: (el) => {
    console.log(el);
    el.focus();
  }
};

const color = 'blue';
</script>

<template>
  <main>
    <div :ref="fnRef">函数模板引用</div>
    <ul>
      <li v-for="n in 5" :key="n" ref="liRefs">{{ n }}</li>
    </ul>
    <div>Mouse position is at: {{ x }}, {{ y }}</div>
    <input v-model="url" v-color="color" v-focus type="text" />
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
      Data loaded:
      <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading...</div>
  </main>
</template>
