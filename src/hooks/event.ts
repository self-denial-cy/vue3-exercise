import { onMounted, onUnmounted } from 'vue';

type EventType = keyof WindowEventMap & {};

export function useEventListener(target: EventTarget, event: EventType, callback: EventListener) {
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}
