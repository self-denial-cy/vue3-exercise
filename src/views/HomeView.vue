<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
</script>

<template>
  <main>
    <h4 :ref="fnRef">函数模板引用</h4>
    <ul>
      <li v-for="n in 5" :key="n" ref="liRefs">{{ n }}</li>
    </ul>
  </main>
</template>
