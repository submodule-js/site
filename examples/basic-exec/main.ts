import { exec } from "./submodule";

exec(({ services, input }) => {
  services.log(input)
}, { hello: 'world' })