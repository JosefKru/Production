import { ResolveOptions } from 'webpack'

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // Для файлов с этим расширением, мы не будем указывать их расширение во время испорта
  }
}
