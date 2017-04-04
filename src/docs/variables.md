# Variables

The base variables are located in [mobi-theme-base](https://github.com/mobi-css/mobi-theme-base).

## Naming convention

All variables need to be named as `${rule}-${element}-${modifier}`

## Colors

There are only a few colors in base theme:

```scss
// Add !default so _custom.scss can override it
$color-background: white !default;
$color-text: #333 !default;
$color-text-muted: #777 !default;
$color-border: #ddd !default;

$color-primary: hsl(210, 70%, 50%) !default;
$color-danger: hsl(0, 65%, 60%) !default;

$color-background-faded: darken($color-background, 5%) !default;
```

## Layout

```scss
$max-width-container: 800px !default;
$max-width-container-wider: 1200px !default;

$width-breakpoint: 768px !default;
```

## Spacing

`size-base` is set to `<html>`. Other sizes is based on it.

```scss
// The base size, all other size are based on it
$size-base: 10px !default;

$width-gap: $size-base * 1.5 !default;
$width-gap-double: $width-gap * 2 !default;
$width-gap-half: $width-gap * 0.5 !default;

$width-padding-input: $size-base * 0.5 !default;

$width-border-radius: $size-base * 0.3 !default;

$width-border: 1px !default;

$padding-code: 0.2em 0.3em !default;
```

## Typography

```scss
$font-size: $size-base * 1.6 !default;

$font-size-h1: $size-base * 3.2 !default;
$font-size-h2: $size-base * 2.6 !default;
$font-size-h3: $size-base * 2.2 !default;
$font-size-h4: $size-base * 2 !default;
$font-size-h5: $size-base * 1.8 !default;
$font-size-h6: $size-base * 1.6 !default;

$font-size-pre: $size-base * 1.3 !default;

$font-size-small: 85% !default;

$line-height: 1.5 !default;

$line-height-input: 1.25 !default;
// line-height need to be set to pre, not code
$line-height-pre: 1.2 !default;

$font-weight-bold: 600 !default;

$font-family:
  // Safari for OS X and iOS (San Francisco)
  -apple-system,
  // Chrome for OS X (San Francisco)
  BlinkMacSystemFont,
  // Windows
  'Segoe UI',
  // Android
  'Roboto',
  // Linux
  'Oxygen', // KDE
  'Ubuntu',
  'Cantarell', // GNOME
  // Firefox OS [R.I.P.]
  'Fira Sans',
  // Older Android
  'Droid Sans',
  // Chinese font for OSX and iOS
  'Hiragino Sans GB',
  // Chinese font for Windows
  'Microsoft Yahei', '微软雅黑',
  // Basic web fallback
  Arial, Helvetica, STHeiti, sans-serif,
  // Emoji
  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !default;

$font-family-monospace: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;
```
