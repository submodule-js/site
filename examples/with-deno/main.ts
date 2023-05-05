
import { prepareExecutable } from "@submodule/core"

export const { execute } = prepareExecutable({
  createConfig() {
    return { port: 3000 }
  },

  createServices({ config }) {
    return {
      log(...args: any[]) {
        if (config.port > 1000) {
          console.log.apply(console, args)
        }
      }
    }
  },

})

execute(({ services }) => {
  services.log('abcd', 'ef')
})