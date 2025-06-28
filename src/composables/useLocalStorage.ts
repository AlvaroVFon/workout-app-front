export function useLocalStorage(key, initialValue = null) {
  const storedValue = localStorage.getItem(key)
  const data = ref(storedValue !== null ? JSON.parse(storedValue) : initialValue)

  function set(value) {
    data.value = value
    localStorage.setItem(key, JSON.stringify(value))
  }

  function get() {
    return data.value
  }

  function remove() {
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
