---
home: false
---

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

```typescript
// nuxt.config.js
export default {
  buildModules: [
    'pinia/nuxt',
    'pinia-plugin-persist/nuxt',
  ],
}
```
