module.exports = {
  test: /\.(gif|png|jpe?g)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: { disable: true },
    },
  ],
}
