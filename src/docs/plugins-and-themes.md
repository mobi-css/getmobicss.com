# Plugins and Themes

What makes Mobi.css great is the plugin and theme system.

## Plugin system

Plugin system makes css scalable.

The default bundled Mobi.css only contains basic plugin (aka reset, container, flexbox, e.g.). But with SASS, you can `@import` any plugins as you like.

Don't want to use SASS? No problem!

Actually each plugin provides a standalone version, which means you can simply add `<link rel="stylesheet" href="path/to/plugin-a.css"/>` to include the plugin.

That's say, a plugin is a standalone css library. **You can even use it without Mobi.css**.

## Theme system

It's easy to create your own theme. There are only a few basic variables need to be customized -- most of variables is caculated by a few basic variables.

A theme should be compatible with any plugins.

Like plugins, A theme also provide standalone version.

Unfortunately, you cannot include the standalone plugin with the standalone theme -- the reason is that the standalone plugin is built with [mobi-theme-base](https://github.com/mobi.css/mobi-theme-base).

In this case, you need to build the plugin yourself.

> In Mobi.css v3.0.0, we will use css-variables instead of SASS variables. Then it's possible to include standalone plugin with standalone theme.
