<script setup lang="ts">
interface Props {
  modelValue: boolean;
  width?: number;
}
// 当使用基于类型的声明时，通过 withDefaults 编译器宏弥补为 props 声明默认值的能力
withDefaults(defineProps<Props>(), {
  width: 300
});
defineEmits<{
  (event: 'update:modelValue', val: boolean): void;
}>();
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal-wrapper">
      <div class="modal" :style="{ width: `${width}px` }">
        <slot></slot>
        <slot name="footer">
          <button @click="$emit('update:modelValue', false)">Inner Close</button>
        </slot>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
}
.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
}
</style>
