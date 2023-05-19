<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../components/ModalComponent.vue';

const showModal = ref(false);
</script>

<template>
  <main>
    <button @click="showModal = true">Open Modal</button>
    <Modal v-model="showModal">
      <p>Hello from the modal</p>
      <template #footer>
        <button @click="showModal = false">Outer Close</button>
      </template>
    </Modal>
  </main>
</template>
