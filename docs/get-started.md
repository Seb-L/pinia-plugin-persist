# Getting started

## Install

`yarn add pinia-plugin-persist`

## Setup

### Vue2

```typescript
import { createPinia, PiniaPlugin } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

Vue.use(PiniaPlugin)

const pinia = createPinia()
pinia.use(piniaPersist)

new Vue({
  el: '#app',
  pinia,
})
```

### Nuxt

Create a `pinia-plugin-persist.client.ts` file, and add your pinia plugin.

```typescript
// plugins/pinia-plugin-persist.client.ts
import { Context } from '@nuxt/types'
import piniaPersist from 'pinia-plugin-persist'

export default ({ app }: Context) => {
  app.pinia?.use(piniaPersist)
}
```

Then add your plugin in your `nuxt.config` file.

```typescript
// nuxt.config.ts
import colors from 'vuetify/es5/util/colors'

export default {
  plugins: [
    '@/plugins/pinia-plugin-persist.client'
  ],
}
```

## Typescript definitions

Add the `pinia-plugin-persist` types definition file to your tsconfig file.

```json
{
  "compilerOptions": {
    "types": [
      "pinia-plugin-persist"
    ]
  },
}
```
