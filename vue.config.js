module.exports = {
    publicPath: process.env.VUE_APP_BASE_URL,
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://127.0.0.1:7500',
                target: 'http://192.168.93.100:7500',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}