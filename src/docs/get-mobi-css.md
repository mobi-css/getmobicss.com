# Get Mobi.css

There are a few easy ways to quickly get Mobi.css

## cdnjs

The easiest way to include Mobi.css is using [cdnjs](https://cdnjs.com/libraries/mobi.css):

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mobi.css/3.0.3/mobi.min.css" />
```

## unpkg

cndjs may have some delay to fetch the latest version.

unpkg is a good choice:

```html
<link rel="stylesheet" href="https://unpkg.com/mobi.css/dist/mobi.min.css" />
```

Please notice that this will always fetch the latest version of Mobi.css, which may have breaking changes between major versions, please carefully use it.

## Download

You can download Mobi.css in [this page](https://github.com/mobi-css/mobi.css/releases).

Once downloaded, unzip the compressed folder to see the structure of (the compiled) Mobi.css. You'll see something like this:

```
mobi.css/
└── dist/
    ├── mobi.css
    ├── mobi.css.map
    ├── mobi.min.css
    └── mobi.min.css.map
```

Please use `dist/mobi.min.css` for the compressed version.

## npm

Use npm to install Mobi.css:

```bash
npm install --save mobi.css
```

You can also use npm to install Mobi.css, and then build Mobi.css to your project with [PostCSS](http://postcss.org/), [cssnext](http://cssnext.io/) and other plugins:

```css
@import 'mobi.css';

/* Use variables which declared in mobi-theme-base */
.your-custom-class-name {
    color: var(--color-primary);
}
```

There are a lot of ways to build css with PostCSS and it's plugins, take gulp as an example:

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const cssNext = require('postcss-cssnext');
const pxtorem = require('postcss-pxtorem');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const browserlist = [
    'last 5 iOS versions',
    'last 5 Android versions',
    'last 5 ChromeAndroid versions',
    'last 5 UCAndroid versions',
    'last 5 FirefoxAndroid versions',
    'last 5 OperaMini versions',
    'last 5 OperaMobile versions',
    'last 5 Samsung versions',

    'last 3 Chrome versions',
    'last 3 Firefox versions',
    'last 3 Edge versions',
    'last 3 Opera versions'
];

const plugins = [
    atImport(),
    cssNext({
        browsers: browserlist
    }),
    pxtorem({
        propList: [
            'font', 'font-size', 'line-height', 'letter-spacing',
            'margin*', 'padding*', 'border-radius'
        ]
    }),
    cssnano()
];

gulp.task('build:css', (callback) => {
    gulp.src('src/css/site.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(rename('site.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'))
        .on('end', callback);
});
```

I would recommend you a tool to do all above build steps, [mobi-util-build-css](build-tools.html#mobi-util-build-css)
