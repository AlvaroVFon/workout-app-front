import { ref } from 'vue'

export function useLocalStorage() {
  const data = ref<string | null>(null)

  function set(key: string, value: string): void {
    data.value = value
    localStorage.setItem(key, value)
  }

  function get(key: string): string | null {
    const item = localStorage.getItem(key)
    if (item) {
      try {
        const parsed = JSON.parse(item)
        data.value = parsed
        return parsed
      } catch {
        return null
      }
    }
    return null
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
