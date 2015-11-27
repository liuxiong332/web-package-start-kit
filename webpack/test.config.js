import baseConfig from './base.config';

export default Object.assign({}, baseConfig, {
  output: {
    pathinfo: true
  },

  devtool: 'eval'
});
