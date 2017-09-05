const path = require('path');
const http = require('http');

const gulp = require('gulp');
const ecstatic = require('ecstatic');
const { clean, buildCss } = require('mobi-util-build-css');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'docs');

gulp.task('default', ['build:watch', 'serve']);

gulp.task('build', ['clean:dist', 'pagic', 'build:css']);
gulp.task('build:watch', ['clean:dist', 'pagic:watch', 'build:css:watch']);

gulp.task('clean:dist', () => {
  clean(DIST_DIR);
});

gulp.task('pagic', () => {
  const Pagic = require('pagic');

  const pagic = new Pagic();
  pagic.build();
});

gulp.task('pagic:watch', () => {
  const Pagic = require('pagic');

  const pagic = new Pagic();
  pagic.watch().build();
});

gulp.task('build:css', (callback) => {
  buildCss({
    src: `${SRC_DIR}/css/_site.css`,
    dist: `${DIST_DIR}/css/site.min.css`,
    enableCompress: true,
    enablePxtorem: true,
    callback
  });
});

gulp.task('build:css:watch', ['build:css'], () => {
  gulp.watch([
    `${SRC_DIR}/css/**/*`
  ], ['build:css']);
});

gulp.task('serve', () => {
  http.createServer(
    ecstatic({ root: DIST_DIR })
  ).listen(8000);

  console.log(`Serve ${DIST_DIR} on http://localhost:${8000}/`);
});
