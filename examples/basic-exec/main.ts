import { execute, prepare } from "./submodule";

execute(({ services }, input) => {
  services.log(input)
}, { hello: 'world' })

const log = prepare(({ services }, input: string) => {
  services.log(input)
})