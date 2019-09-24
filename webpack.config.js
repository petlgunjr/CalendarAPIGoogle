module.exports = env => {
  new webpack.DefinePlugin({
    "CALENDAR_PROJECT_ID" : env.CALENDARAPIGOOGLEID,
    "CALENDAR_PROJECT_KEY" : env.GOOGLECALENDARAPI
  });
  return ({
    entry:  './source/app.js',
    output: {
      filename: './dist/bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  })
}
