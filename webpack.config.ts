import webpack from 'webpack'
import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'production',
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'public'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  },
})

export default config
