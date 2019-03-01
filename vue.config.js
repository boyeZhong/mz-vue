module.exports = {
  /**
   * 字符串模式，开发中项目所有的请求都会代理到这个地址
   * http：//localhost：8080/img -> https://m.maizuo.com/img
  */
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.maizuo.com',
        // 路径重写
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
