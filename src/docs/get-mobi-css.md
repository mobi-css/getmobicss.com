---
next:
  text: Boilerplate
  url: /docs/boilerplate.html
---

# Get Mobi.css

There are a few easy ways to quickly get Mobi.css.

## cdnjs

The easiest way to include Mobi.css is using [cdnjs](https://cdnjs.com/libraries/mobi.css):

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mobi.css/2.0.0-alpha.7/mobi.min.css" />
```

## unpkg

cndjs may have some delay to fetch the latest version.

unpkg is a good choice:

```html
<link rel="stylesheet" href="https://unpkg.com/mobi.css/dist/mobi.min.css" />
```

> Warning: this will fetch the latest version of Mobi.css, please carefully include it.

## Download

You can download Mobi.css in the [release page](https://github.com/mobi-css/mobi.css/releases).

Once downloaded, unzip the compressed folder to see the structure of (the compiled) Mobi.css. You'll see something like this:

```shell
mobi.css/
└── dist/
    ├── mobi.css
    ├── mobi.min.css
    └── mobi.min.css.map
```

Please use `dist/mobi.min.css` for the compressed version.

## npm

Use npm to install Mobi.css:

```shell
npm install --save mobi.css
```

Then you can build Mobi.css to your project using SASS:

```scss
@import 'mobi.css/src/mobi';
```

Be sure you have added node\_modules to your Sass's [load_paths](http://stackoverflow.com/questions/6502313/sass-import-a-file-from-a-different-directory).
