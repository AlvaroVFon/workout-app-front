import { ref, watch } from 'vue'
import { useLocalStorage } from './useLocalStorage'
import type { LoginCredentials, User } from '../types/auth'

export function useLogin() {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const { set, remove } = useLocalStorage()

  async function login({ email, password }: LoginCredentials) {
    loading.value = true
    const token = 'this is a random token'
    user.value = {
      id: '12345',
      email,
      name: 'John Doe',
      avatar: 'https://example.com/avatar.jpg',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    console.log(email, password)
    set(user.value.email, token)
    set('user', JSON.stringify(user))

    setTimeout(() => {
      loading.value = false
      error.value = null
    }, 1000)
  }

  function logout() {
    user.value = null
    loading.value = false
    error.value = null
    remove('user')
  }

  watch(
    user,
    (newVal) => {
      localStorage.setItem('user', JSON.stringify(newVal))
    },
    { deep: true },
  )

  const storedValue = localStorage.getItem('user')
  if (storedValue !== null) {
    user.value = JSON.parse(storedValue)
  }

  return { login, logout, user }
}
