import { watch } from 'vue-demi'
import { PiniaPluginContext, StateTree, GettersTree } from 'pinia'

export interface PersistStrategy {
  key?: string;
  storage?: Storage;
  paths?: string[];
}

export interface PersistOptions {
  enabled: true;
  strategies: PersistStrategy[];
}

type Store = PiniaPluginContext['store'];
type PartialState = Partial<Store['$state']>;

declare module 'pinia' {
  export interface DefineStoreOptions<Id extends string, S extends StateTree, G extends GettersTree<S>, A> {
    persist?: PersistOptions;
  }
  export interface PiniaCustomProperties {
    $restored: boolean
    $saved:boolean 
  }
}

const updateStorage = async (strategy: PersistStrategy, store: Store) => {
  const storage = strategy.storage || sessionStorage
  const storeKey = strategy.key || store.$id
  const asyncStorage = strategy.async || false

  if (strategy.paths) {
    const partialState = strategy.paths.reduce((finalObj, key) => {
      finalObj[key] = store.$state[key]
      return finalObj
    }, {} as PartialState)
    if (asyncStorage) {
      store.$saved = new Promise(async (resolve, reject) => {
        return await storage
          .setItem(storeKey, JSON.stringify(partialState))
          .then(() => {
            resolve(true)
          })
          .catch((e) => {
            reject(e)
          })
      })
    } else {
      storage.setItem(storeKey, JSON.stringify(partialState))
    }
  } else {
    if (asyncStorage) {
      store.$saved = new Promise(async (resolve, reject) => {
        return await storage
          .setItem(storeKey, JSON.stringify(store.$state))
          .then(() => {
            resolve(true)
          })
          .catch((e) => {
            reject(e)
          })
      })
    } else {
      storage.setItem(storeKey, JSON.stringify(store.$state))
    }
  }
}

export default ({ options, store }: PiniaPluginContext): void => {
  //Allow properties to be tracked by devtools 
  if (process.env.NODE_ENV === 'development') {
    store._customProperties.add('$restored')
    store._customProperties.add('$saved')
  }
 if (options.persist?.enabled) {
    options.persist?.strategies.forEach(async (strategy) => {
      const storage = strategy.storage || sessionStorage
      const storeKey = strategy.key || store.$id
      const asyncStorage = strategy.async || false

      store.$restored = new Promise(async (resolve, reject) => {
        return asyncStorage
          ? await storage
              .getItem(storeKey)
              .then((st) => {
                if (st) {
                  try {
                    let p = JSON.parse(st)
                    store.$patch(p)
                  } catch (error) {
                    store.$patch(st)
                  }
                  updateStorage(strategy, store)
                  setTimeout(() => resolve(true), 100)
                } else {
                  setTimeout(() => resolve(true), 100)
                }
              })
              .catch((e) => {
                setTimeout(() => reject(e), 100)
              })
          : storage.getItem(storeKey)
          ? resolve(storage.getItem(storeKey))
          : resolve(true)
      })
    })
    watch(
      () => store.$state,
      () => {
        options.persist?.strategies.forEach((strategy) => {
          updateStorage(strategy, store)
        })
      },
      {
        deep: true,
      }
    )
  }
}
