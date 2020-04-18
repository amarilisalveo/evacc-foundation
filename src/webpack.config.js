module: {
  loaders: [
      {
          test: /\.jsx?/,
          include: APP_DIR,
          loader: 'babel',
          query  :{
              presets:['react','es2015']
          }
      },