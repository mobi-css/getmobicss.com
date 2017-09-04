# Button

## Standalone Library

You can download the plugin as a standalone library in [this page](https://github.com/mobi-css/mobi.css/tree/master/packages/mobi-plugin-button/dist).

Or simply insert this into your `<head>` element:

```html
<link rel="stylesheet" href="https://unpkg.com/mobi-plugin-button/dist/mobi-plugin-button.min.css" />
```

## Basic Button

There are three types of buttons: default, primary and danger.

<button type="button" class="btn">.btn</button>
<button type="button" class="btn btn-primary">.btn.btn-primary</button>
<button type="button" class="btn btn-danger">.btn.btn-danger</button>

```html
<button type="button" class="btn">.btn</button>
<button type="button" class="btn btn-primary">.btn.btn-primary</button>
<button type="button" class="btn btn-danger">.btn.btn-danger</button>
```

## Input Button

<input type="button" class="btn" value=".btn"/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger"/>

```html
<input type="button" class="btn" value=".btn"/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary"/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger"/>
```

## Link Button

<a href="javascript:void(0);" class="btn">.btn</a>
<a href="javascript:void(0);" class="btn btn-primary">.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger">.btn.btn-danger</a>

```html
<a href="javascript:void(0);" class="btn">.btn</a>
<a href="javascript:void(0);" class="btn btn-primary">.btn.btn-primary</a>
<a href="javascript:void(0);" class="btn btn-danger">.btn.btn-danger</a>
```

## Disabled Button

<input type="button" class="btn" value=".btn" disabled/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary" disabled/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger" disabled/>

```html
<input type="button" class="btn" value=".btn" disabled/>
<input type="button" class="btn btn-primary" value=".btn.btn-primary" disabled/>
<input type="button" class="btn btn-danger" value=".btn.btn-danger" disabled/>
```

## Block Button

By default the `.btn` is a `inline-block` button, we can add `.btn-block` to get the `block` button:

<input type="button" class="btn btn-block" value=".btn.btn-block"/>

```html
<input type="button" class="btn btn-block" value=".btn.btn-block"/>
```
