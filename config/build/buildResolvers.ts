import path from 'path'
import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // Для файлов с этим расширением, мы не будем указывать их расширение во время испорта
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}
