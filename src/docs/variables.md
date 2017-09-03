# Variables

The base variables are located in [mobi-theme-base](https://github.com/mobi-css/mobi.css/tree/master/packages/mobi-theme-base).

Mobi.css use the future's CSS syntax `--variable-name` to declare css variables, and use `cssnext` to compile it.

For more detail, please checkout [cssnext features](http://cssnext.io/features/).

## Naming Convention

All variables need to be named as `--rule-element-modifier`.

## Colors

There are only a few colors in base theme:

```css
:root {
    --color-background: white;
    --color-text: #333;
    --color-text-muted: #777;
    --color-border: #ddd;

    --color-primary: hsl(210, 70%, 50%);
    --color-danger: hsl(0, 65%, 60%);

    --color-background-faded: color(var(--color-background) lightness(-5%));
}
```

Variables are declared in the `:root` selector. It's the same in the following code snippet。

## Layout

```css
    --max-width-container: 800px;
    --max-width-container-wider: 1200px;
```

## Media Query

```css
    @custom-media --mobile-viewport (max-width: 767px);
    @custom-media --desktop-viewport (min-width: 768px);
```

## Spacing

```css
    --size-base: 10px;

    --width-gap: calc(var(--size-base) * 1.5);
    --width-gap-double: calc(var(--width-gap) * 2);
    --width-gap-half: calc(var(--width-gap) * 0.5);

    --width-padding-input: calc(var(--size-base) * 0.5);

    --width-border-radius: calc(var(--size-base) * 0.5);

    --width-border: 1px;

    --padding-code: 0.2em 0.3em;

```

## Typography

```css
    --font-size: calc(var(--size-base) * 1.6);

    --font-size-h1: calc(var(--size-base) * 3.2);
    --font-size-h2: calc(var(--size-base) * 2.6);
    --font-size-h3: calc(var(--size-base) * 2.2);
    --font-size-h4: calc(var(--size-base) * 2);
    --font-size-h5: calc(var(--size-base) * 1.8);
    --font-size-h6: calc(var(--size-base) * 1.6);

    --font-size-pre: calc(var(--size-base) * 1.3);

    --font-size-small: 85%;

    --line-height: 1.5;
    --line-height-input: 1.25;
    --line-height-pre: 1.2;

    --font-weight-bold: 600;

    --font-family:
        /* Safari for OS X and iOS (San Francisco) */
        '-apple-system',
        /* Chrome for OS X (San Francisco) */
        'BlinkMacSystemFont',
        /* Chinese font for OSX and iOS */
        'Hiragino Sans GB',
        /* Android */
        'Roboto',
        /* Windows */
        'Segoe UI',
        /* Chinese font for Windows */
        'Microsoft Yahei', '微软雅黑',
        /* Linux */
        'Oxygen-Sans', 'Ubuntu', 'Cantarell',
        /* Basic web fallback */
        'Helvetica', 'Arial', 'STHeiti', sans-serif,
        /* Emoji */
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    --font-family-monospace: 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
```
