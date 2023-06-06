// Получаем имя текущей папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = './src';
const buildFolder = './local/templates/custom';

export const path = {
  build: {
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    img: `${buildFolder}/img/`,
    // fonts: `${buildFolder}/fonts/`,
  },
  src: {
    scss: `${srcFolder}/scss/styles.scss`,
    js: `${srcFolder}/js/main.js`,
    img: `${srcFolder}/img/**/*.+(jpg|jpeg|png|gif|webp|ico)`,
    svg: `${srcFolder}/img/**/*.svg`,
    // fonts: `${srcFolder}/fonts/`,
  },
  watch: {
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    img: `${srcFolder}/img/**/*.+(jpg|jpeg|png|gif|webp|ico|svg)`,
  },
  clean: `${buildFolder}/**/*.+(css|js)`,
  cleanmaps: `${buildFolder}/**/*.map`,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
}