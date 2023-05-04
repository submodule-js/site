import { builder } from "@submodule/core"

type Config = {
  debug: boolean
}

type Services = {
  log: (...args: any[]) => void
}

export const exec = builder()
  .config<Config>()
  .services<Services>()
  .prepareExecutable({
    createConfig() {
      return { debug: Boolean(process.env.DEBUG) }
    },

    createServices({ config }) {
      return {
        log(...args) {
          if (config.debug) {
            console.log.apply(console, args)
          }
        }
      }
    },
    
    async execute({ route, config, services, input, initArgs }) {
      return route({ config, services, input, initArgs })
    }
  }, {})