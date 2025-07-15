import { ref } from 'vue'

export function useLocalStorage() {
  const data = ref<string | null>(null)

  function set(key: string, value: string): void {
    data.value = value
    localStorage.setItem(key, value)
  }

  function get(key: string): string | null {
    return localStorage.getItem(key)
  }

  function remove(key: string): void {
    data.value = null
    localStorage.removeItem(key)
  }

  return {
    data,
    set,
    get,
    remove,
  }
}
