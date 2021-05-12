# Advanced usage

## Persist partial state

```typescript
export const useAppStore = defineStore({
  id: 'storeUser',
  state () {
    return {
      firstName: 'S',
      lastName: 'L',
      accessToken: 'xxxxxxxxxxxxx',
    }
  },
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      { storage: sessionStorage, paths: ['firstName', 'lastName'] },
      { storage: localStorage, paths: ['accessToken'] },
    ],
  },
})
```

## Custom storage

```typescript
import Cookies from 'js-cookie'

const cookiesStorage: Storage = {
  setItem (key, state) {
    return Cookies.set('accessToken', state.accessToken, { expires: 3 })
  },
  getItem (key) {
    return JSON.stringify({
      accessToken: Cookies.getJSON('accessToken'),
    })
  },
}

export const useAppStore = defineStore({
  id: 'storeUser',
  state () {
    return {
      firstName: 'S',
      lastName: 'L',
      accessToken: 'xxxxxxxxxxxxx',
    }
  },
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      { storage: cookiesStorage, paths: ['accessToken'] },
    ],
  },
})
```
