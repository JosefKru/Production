import { Configuration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export function buildDevServer(options: BuildOptions): Configuration {
  const { port } = options
  return {
    open: true,
    port,
  }
}
