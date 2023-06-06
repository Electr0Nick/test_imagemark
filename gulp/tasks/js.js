import webpack from 'webpack-stream';

export const js = () => {
  return app.gulp.src(app.path.src.js)
    .pipe(webpack({
      mode: 'production',
      devtool: 'source-map',
      output: {
        filename: 'main.min.js'
      }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.gulp.src(app.path.src.js))
    .pipe(app.gulp.dest(app.path.build.js));
}