# Strategies

With `pinia-plugin-persist` You can use multiple strategies to persist your store data.

You can define a strategy list in your store under the `persist` key.

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
    strategies: [], // <- HERE
  },
})
```

Each strategy is an object like so:

```typescript
interface PersistStrategy {
  key?: string; // Storage key
  storage?: Storage; // Actual storage (default: sessionStorage)
  paths?: string[]; // list ok state keys you want to store in the storage
}
```
