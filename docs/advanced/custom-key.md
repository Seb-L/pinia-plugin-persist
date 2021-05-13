# Custom storage key

You can set a custom storage key by setting the `key` key in each strategy.

In this example, the whole state will be stored in the localStorage under the key `user`.

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
    strategies: [
      {
        key: 'user',
        storage: localStorage,
      },
    ],
  },
})
```
