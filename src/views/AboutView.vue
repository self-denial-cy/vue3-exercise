<script setup lang="ts">
import { inject, ref } from 'vue';

const i18n = inject('i18n');

console.log(i18n);

const isShow = ref(true);

const list = ref([]);
</script>

<template>
  <main>
    <div>{{ $translate('greetings.hello') }}</div>
    <button @click="isShow = !isShow">Toggle</button>
    <!-- <Transition> 仅支持单个元素或组件作为其插槽内容，如果内容是一个组件，该组件必须仅有一个根元素 -->
    <Transition>
      <p v-if="isShow">Hello Transition</p>
    </Transition>
    <Transition name="slide-fade">
      <p v-if="isShow">Hello Transition</p>
    </Transition>
    <Transition name="bounce">
      <p v-if="isShow">Hello Transition</p>
    </Transition>
    <Transition
      name="custom-class"
      enter-active-class="animate__animated animate__rubberBand"
      leave-active-class="animate__animated animate__swing"
    >
      <p v-if="isShow">Hello Transition</p>
    </Transition>
    <br />
    <button @click="list.push('item')">Push</button>
    <TransitionGroup name="list" tag="ul">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </TransitionGroup>
  </main>
</template>

<style scoped lang="less">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
