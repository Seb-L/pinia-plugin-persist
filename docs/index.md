# Getting started

## Install

`yarn add pinia-plugin-persist`

## Setup

### Vue2

```typescript
import Vue from 'vue'
import vueCompositionApi from '@vue/composition-api'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPersist)

Vue.use(vueCompositionApi)
Vue.use(pinia)

new Vue({
  pinia,
  render: h => h(App),
}).$mount('#app')
```

### Vue3

```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()
pinia.use(piniaPersist)

createApp({})
  .use(pinia)
  .mount('#app')
```

### Nuxt 2

Create a `pinia-plugin-persist.client.ts` file, and add your pinia plugin.

```typescript
// plugins/pinia-plugin-persist.client.ts
import { Context } from '@nuxt/types'
import piniaPersist from 'pinia-plugin-persist'

export default ({ app }: Context) => {
  app.pinia?.use(piniaPersist)
}
```

Then add your plugin in your `nuxt.config.ts` file.

```typescript
// nuxt.config.ts
export default {
  plugins: [
    '~/plugins/pinia-plugin-persist.client'
  ],
}
```

### Nuxt 3


Create a `pinia-plugin-persist.client.ts` file, and add your pinia plugin.

```typescript
// plugins/pinia-plugin-persist.client.ts
import piniaPersist from 'pinia-plugin-persist'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia?.use(piniaPersist)
})
```

Done!

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
