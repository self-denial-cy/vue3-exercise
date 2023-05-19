<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

const componentRef = ref(null);

onMounted(() => {
  console.log(componentRef.value);
});

function handleTrigger(text: string) {
  alert(text);
}

const backgroundColor = 'black';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/imgs/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <!-- 当在组件上使用自定义指令时，它始终应用于组件的根节点，和透传 attributes 类似 -->
      <!-- 需要注意，组件可能含有多个根节点，当应用到这种组件时，指令将会被忽略且抛出一个警告 -->
      <!-- 和 attribute 不同，指令不能通过类似 v-bind="$attrs" 的形式来传递 -->
      <!-- 总体来说，不推荐在组件上使用自定义指令 -->
      <HelloWorld ref="componentRef" v-backgroundColor="backgroundColor" msg="Hello Vue3" @trigger="handleTrigger" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/modal">Modal</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense>
            <component :is="Component"></component>
            <template #fallback>正在加载中...</template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </template>
  </RouterView>
</template>

<style scoped>
header {
  max-height: 100vh;
  line-height: 1.5;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
nav {
  margin-top: 2rem;
  width: 100%;
  text-align: center;
  font-size: 12px;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  nav {
    margin-left: -1rem;
    margin-top: 1rem;
    padding: 1rem 0;
    text-align: left;
    font-size: 1rem;
  }
}
</style>
