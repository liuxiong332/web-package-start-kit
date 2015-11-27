import baseConfig, { options } from './base.config';

export default Object.assign({}, baseConfig, {
  entry: {
    'start-kit': './src/index.js'
  },

  output: {
    path: './dist',
    filename: options.optimizeMinimize ? '[name].min.js' : '[name].js',
    library: 'start-kit',
    libraryTarget: 'umd'
  },

  externals: [
    // If you use react, then the react will not include in the distributed library
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ]
});
