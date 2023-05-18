import { ref, isRef, unref, watchEffect } from 'vue';
import type { Ref } from 'vue';

export function useFetch(url: Ref<string> | string) {
  const data = ref(null);
  const error = ref(null);

  let timer: NodeJS.Timer | null = null;

  function doFetch() {
    console.log('doFetch');
    data.value = null;
    error.value = null;
    fetchData(unref(url));
  }

  function fetchData(url: string) {
    console.log('fetchData');
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fetch(unref(url))
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err));
    }, 500);
  }

  if (isRef(url)) {
    watchEffect(doFetch);
  } else {
    doFetch();
  }

  return { data, error };
}
