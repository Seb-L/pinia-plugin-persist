# Basic usage

By enabling the persist plugin on your store, the whole state will be stored in the sessionStorage by default.

The store `id` is used as the storage key (to set a custom storage key)

```typescript
// store/use-user-store.ts
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
  },
})
```
