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

A `$restore` and `$saved` property will be added to the pinia store property to let you know the state has been restored or saved respectively from your storage and it is now safe to commit any mutations that modify the stored state. Both properties will return `true` or an empty object on success or errors that may occur when performing a storage action.

Here's an example of a beforeEach() hook in vuex-router that will cause your app to wait for the store to be restored before taking any further actions:

```typescript
import { useStore } from '~/store'

router.beforeEach(async (to, from, next) => {
  const store = useStore()
  await store.$restored // => true or Error
  next()
})

```

An example using `store.$saved`

```typescript
import { useStore } from '~/store'

const store = useStore()
const dataToBeSaved = {}

store.$patch(dataToBeSaved)

await store.$saved // => true or Error

//Perform other actions
```
