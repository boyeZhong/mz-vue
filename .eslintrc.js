module.exports = {
  root: true,
  env: {
    node: true
  },
  // 使用的第三方规则库，也就是开始vue-create项目的时候选择的规则库
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  // 自定义规则，如果你对第三方规则库有使用得不爽的地方可以在这里覆盖修改他。
  rules: {
    // 如果是开发模式就是浏览器显示console状态，如果是生成模式就不显示
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 对不让使用分号规则进行覆盖
    'semi': "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
