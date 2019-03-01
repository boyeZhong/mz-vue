# axios 的二次封装

1. 配合 jwt 使用
2. 区分不同的环境，以应用上不同的 baseUrl
  开发 http://localhost:8080/
  正式 http://10.234.32.123/


# 1 process.env.NODE_ENV 能够让我们区分 开发 or 生产环境

# 2

  1. src 下新建一个 utils 文件夹
  2. utils 新建一个 http.js
  3. 在  http.js 中 封装 axios ,并暴露封装好的 axios 出去
  4. 在 使用 axios 的地方，修改为引入 3中暴露的东西。 （http.js）
  4. 在 main.js 中，将 http.js 暴露出来的东西，给定义到 Vue 的原型上面。之后组件中就可以使用 this.xxx 拿到定义在 Vue 原型上  xxx.
