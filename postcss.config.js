module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackListL: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
