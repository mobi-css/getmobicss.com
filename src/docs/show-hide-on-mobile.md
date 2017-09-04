# Show Hide on Mobile

> Show or hide element on mobile.

## Standalone Library

You can download the plugin as a standalone library in [this page](https://github.com/mobi-css/mobi.css/tree/master/packages/mobi-plugin-show-hide-on-mobile/dist).

Or simply insert this into your `<head>` element:

```html
<link rel="stylesheet" href="https://unpkg.com/mobi-plugin-show-hide-on-mobile/dist/mobi-plugin-show-hide-on-mobile.min.css" />
```

## One Breakpoint

There are only one breakpoint in Mobi.css. It separates the mobile and desktop.

Device with width less than `768px` will be recognized as mobile device.

Device with width equal or more than `768px` will be recognized as desktop device.

## Show on Mobile

Element with `.show-on-mobile` will only show on mobile:

<p class="show-on-mobile">
  This part will only show on mobile
</p>

```html
<p class="show-on-mobile">
  This part will only show on mobile
</p>
```

## Hide on Mobile

Element with `.hide-on-mobile` will hide on mobile and show on desktop:

<p class="hide-on-mobile">
  This part will hide on mobile
</p>

```html
<p class="hide-on-mobile">
  This part will hide on mobile
</p>
```
