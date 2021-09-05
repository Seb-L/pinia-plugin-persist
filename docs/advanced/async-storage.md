# Async storage

Use localforage or any other async storage, Just set `async: true`
 
```typescript
// store/use-user-store.ts
import localforage from 'localforage'

export const useUserStore = defineStore({
  id: 'storeUser',
  state () {
    return {
      firstName: 'S',
      lastName: 'L',
      accessToken: 'xxxxxxxxxxxxx',
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localforage,
        async: true,
        paths: ['accessToken']
      },
    ],
  },
})
```
