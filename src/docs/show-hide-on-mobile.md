# Show Hide on Mobile

> Show element on mobile or hide element on mobile.

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
