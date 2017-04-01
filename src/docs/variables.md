# Variables

The base variables are located in [mobi-theme-base](https://github.com/mobi-css/mobi-theme-base).

## Naming convention

All variables need to be named as `${rule}-${element}-${modifier}`

## Colors

There are only a few colors in base theme:

```html
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

```html
$max-width-container: 80rem !default;
$max-width-container-wider: 120rem !default;

$width-breakpoint: 768px !default;
```

## Spacing

`size-base` is set to `<html>`. Other sizes is based on it.

```html
// The base size, all other size are based on it
$size-base: 10px !default;

$width-gap: 1.5rem !default;
$width-gap-double: $width-gap * 2 !default;
$width-gap-half: $width-gap * 0.5 !default;

$width-padding-input: 0.5rem !default;

$width-border-radius: 0.3rem !default;

$width-border: 1px !default;

$padding-code: 0.2em 0.3em !default;
```

## Typography

```html
$font-size: 1.6rem !default;

$font-size-h1: 3.2rem !default;
$font-size-h2: 2.6rem !default;
$font-size-h3: 2.2rem !default;
$font-size-h4: 2rem !default;
$font-size-h5: 1.8rem !default;
$font-size-h6: 1.6rem !default;

$font-size-pre: 1.3rem !default;

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
