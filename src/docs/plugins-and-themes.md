# Plugins and Themes

What makes Mobi.css great is the plugin and theme system.

## Plugin system

Plugin system makes css scalable.

The default bundled Mobi.css only contains basic plugin (aka reset, container, flexbox, e.g.). But with SASS, you can `@import` any plugins as you like.

Don't want to use SASS? No problem!

Actually each plugin provides a standalone version, which means you can simply add `<link rel="stylesheet" href="path/to/plugin-a.css"/>` to include the plugin.

That is to say, a plugin is a standalone css library. **You can even use it without Mobi.css**.

## Theme system

A theme is just a list of variables. It is based on [mobi-theme-base](https://github.com/mobi-css/mobi-theme-base), and may contains some extension variables.

A plugin should be compatible with any themes. If a plugin use the extension variables which are not exists in mobi-theme-base, it should has a fallback value that only use the base variables.

Like plugins, A theme also provides a standalone version. The difference is that the standalone version may have a different plugins set with the default bundled Mobi.css

Unfortunately, you CANNOT use the standalone plugin with the standalone theme -- the reason is that the standalone plugin is built with [mobi-theme-base](https://github.com/mobi.css/mobi-theme-base).

In this case, you need to build the plugin yourself.

> In Mobi.css v3.0.0, we will use css-variables instead of SASS variables. Then it's possible to include standalone plugin with standalone theme.

It's easy to create your own theme. There are only a few basic variables need to be customized.
