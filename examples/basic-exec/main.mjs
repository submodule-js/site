import { prepareExecutable } from "@submodule/core"
import chalk from "chalk"

const { execute } = prepareExecutable({
  createConfig() {
    const color = chalk[process.env.LOG_COLOR] || chalk.green

    return { color }  
  },
  createServices({ config }) {
    return {
      log(...args) {
        console.log(...args.map(arg => config.color(arg)))
      }
    }
  }
})

execute(( { services } ) => {
  services.log('hello', 'world')
})