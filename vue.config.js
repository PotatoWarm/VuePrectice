const { defineConfig } = require('@vue/cli-service')
// 使用defineConfig函数定义配置对象
module.exports = defineConfig({
  // 使用transpileDependencies属性指定需要转译的依赖
  transpileDependencies: true,
  // 使用lintOnSave属性指定是否在保存时检查代码
  lintOnSave: false,
  // 使用css属性指定css的配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001/', // 目标 API 服务器
        changeOrigin: true, // 是否改变源
        pathRewrite: { '^/api': '' }, // 重写路径
      },
    },
  },
  css: {
    // 使用loaderOptions属性指定less的配置
    loaderOptions: {
      less: {
        // 使用lessOptions属性指定less的配置
        lessOptions: {
          // 使用javascriptEnabled属性指定是否启用javascript
          javascriptEnabled: true
        }
      }
    }
  }
})