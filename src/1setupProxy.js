const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.bigcommerce.com',
      changeOrigin: true,
      headers: {
        Authorization: 'Bearer sfg3gi5tfc4abmzyyz4wpddvoq9opxl',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  );
};