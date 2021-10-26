module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue_learning/' //  vue_learning 為 repo 名稱
      : '/'
  }