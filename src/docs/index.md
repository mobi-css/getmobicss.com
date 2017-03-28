# Introduction

Mobi.css is a mobile-first, pluginable & themeable css framework.

It's designed for mobile, but also works awesome on desktop.

Here is how to quickly get started with Mobi.css and a template starter page.

## Quick Start

Copy and paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load Mobi.css:

```html
<link rel="stylesheet" href="https://unpkg.com/mobi.css/dist/mobi.min.css" />
```

This will include the basic classes, actually it's a collections of Mobi.css plugins, you can find the usage in each page:

- [Reset](reset.html)
- [Top Gap](top-gap.html)
- [Show Hide on Mobile](show-hide-on-mobile.html)
- [Flexbox](flexbox.html)
- [Container](container.html)
- [Button](button.html)
- [Form](form.html)
- [Scroll View](scroll-view.html)
- [Table](table.html)
- [Text](text.html)

To load other plugins, you can simply insert the standalone version of the plugin, take [mobi-plugin-color](https://github.com/mobi-css/mobi-plugin-color) as an example:

```html
<link rel="stylesheet" href="https://unpkg.com/mobi-plugin-color/dist/mobi-plugin-color.min.css" />
```

You can find the usage in the [mobi-plugin-color's docs](https://mobi-css.github.io/mobi-plugin-color/).

The list of all the available plugins can be found in the [plugins page](../plugins).

## Starter Template

Here is a Mobi.css template page that conforms to the modern HTML5 specification:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- Title of the page -->
    <title>Mobi.css</title>

    <!-- Mobi.css -->
    <link rel="stylesheet" href="https://unpkg.com/mobi.css/dist/mobi.min.css">
    <!-- Add plugins as you like -->
    <link rel="stylesheet" href="https://unpkg.com/mobi-plugin-color/dist/mobi-plugin-color.min.css">
  </head>
  <body>
    <!-- Your content here -->
    <h1>Hello World</h1>
  </body>
</html>
```
