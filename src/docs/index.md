---
next:
  text: Get Mobi.css
  url: /docs/get-mobi-css.html
---

# Overview

Mobi.css is a mobile-first, pluginable & themeable css framework.

## Mobile-first

The web is being accessed more and more on mobile devices. It's important to design your websites mobile friendly.

Mobi.css is a css framework designed for mobile, and also works awesome on desktop.

It's less than 3kb after gzipped, however, it's much more powerful than you think.

First it provides a simple and flexble layout system based on flexbox. It gives Mobi.css the **most magic ability** to achieve any layout mode.

Secondly Mobi.css focus on the details and provides the best user experience, especially for content-rich website.

What makes Mobi.css great is the plugin and theme system.

## Pluginable

Plugin system makes css scalable.

The default bundled Mobi.css only contains basic plugin (aka reset, container, flexbox, e.g.). With SASS, you can `@import` any plugins as you like.

Don't want to use SASS? No problem!

Actually each plugin provides a standalone version, which means you can simply add `<link rel="stylesheet" href="path/to/plugin-a.css"/>` to include the plugin.

That's say, a plugin is a standalone css library. **You can even use it without Mobi.css**.

## Themeable

It's easy to create your own theme. There are only a few basic variables need to be customize -- most of variables is caculated by a few basic variables.

A theme should be compatible with any plugins.

Like plugins, the themes also provide standalone versions.

Unfortunately, you cannot include the standalone plugin with the standalone theme -- the reason is that the standalone plugin is built with mobi-theme-base.

In this case, you need to build the plugin yourself.

> In Mobi.css v3.0.0, we will use css-variables instead of SASS variables. Then it's possible to include standalone plugin with standalone theme.
