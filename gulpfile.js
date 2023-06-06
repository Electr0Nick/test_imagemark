import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';


global.app = {
  gulp: gulp,
  path: path,
  plugins:plugins,
};


import { clean } from './gulp/tasks/clean.js';
import { cleanmaps } from './gulp/tasks/cleanmaps.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { img } from './gulp/tasks/img.js';
// import { otf2ttf, ttf2woff, fontsStyle } from './gulp/tasks/fonts.js';


function watcher() {
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, img);
}


// const fonts = gulp.series(otf2ttf, ttf2woff, fontsStyle);
// const mainTasks = gulp.series(fonts, gulp.parallel(scss, js, img));
const mainTasks = gulp.parallel(scss, js, img);
const dev = gulp.series(mainTasks, watcher);
const build = gulp.series(clean, mainTasks, cleanmaps);


gulp.task('default', dev);
export {clean};
export {build};