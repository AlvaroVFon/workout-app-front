import { useLocalStorage } from '@/composables/useLocalStorage'
import type { LoginResponse } from '@/types/auth'

const storage = useLocalStorage()
function getLoginValues() {
  return {
    token: storage.get('token'),
    refreshToken: storage.get('refresh_token'),
    user: storage.get('user'),
  }
}

function unStorageLoginValues() {
  storage.remove('token')
  storage.remove('refresh_token')
  storage.remove('user')
}

function storageLoginValues(loginValues: LoginResponse) {
  const { user, token, refreshToken } = loginValues

  storage.set('token', token)
  storage.set('refresh_token', refreshToken)
  storage.set('user', JSON.stringify(user))
}

export { getLoginValues, unStorageLoginValues, storageLoginValues }
