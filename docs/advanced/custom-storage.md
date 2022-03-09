# Custom storage

By default the storage is set to sessionStorage, but you can specify the storage you want to use for each strategy by setting the `storage` key.

You can then use `sessionStorage`, `localStorage` or any custom storage object.

In this example we create a storage that uses the `js-cookie` npm module to get and set the user's access token into a cookie.

```typescript
// store/use-user-store.ts
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

export const useUserStore = defineStore('storeUser', {
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
        storage: cookiesStorage,
        paths: ['accessToken']
      },
    ],
  },
})
```
