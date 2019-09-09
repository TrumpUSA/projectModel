const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(proxy('/api', {
    "target": 'http://139.224.131.131:8080',
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": "/"
    }
  }))
}
