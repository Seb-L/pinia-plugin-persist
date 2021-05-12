# Basic usage

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
  },
})
```
