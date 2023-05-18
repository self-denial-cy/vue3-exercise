import { ref } from 'vue';
import { useEventListener } from './event';

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  // function update(event: MouseEvent) {
  //   x.value = event.pageX;
  //   y.value = event.pageY;
  // }

  // onMounted(() => window.addEventListener('mousemove', update));
  // onUnmounted(() => window.removeEventListener('mousemove', update));

  useEventListener(window, 'mousemove', (event) => {
    x.value = (event as MouseEvent).pageX;
    y.value = (event as MouseEvent).pageY;
  });

  return { x, y };
}
