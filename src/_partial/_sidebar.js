const getActiveClass = require('./_utils/_get-active-class');

module.exports = ({ relativeToRoot, path }) => `
  <aside class="show-on-mobile">
    <input type="checkbox" id="site-aside-toggle-checkbox" class="hide-on-mobile" />
    <label class="site-aside-toggle-button" for="site-aside-toggle-checkbox">
      <img src="${relativeToRoot}/img/menu.png" height="24" />
    </label>
    <div class="site-aside-mobile-wrapper flex-vertical">
      <div class="unit-1 scroll-view">
        <div class="site-aside top-gap container">
          <ul>
            <li>
              <a href="/" class="site-text-plain title">Mobi.css</a>
              <ul>
                <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs' })}" href="/docs">Docs</a></li>
                <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'plugins' })}" href="/plugins">Plugins</a></li>
                <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'themes' })}" href="/themes">Themes</a></li>
              </ul>
            </li>
            <li class="top-gap"></li>
            ${getDocsMenuItems({ relativeToRoot, path })}
          </ul>
        </div>
      </div>
    </div>
  </aside>
  ${relativeToRoot === '.' ? '' : desktopAside({ relativeToRoot, path })}
`;

function desktopAside({ relativeToRoot, path }) {
  return `
    <div class="site-aside-desktop-wrapper flex-center hide-on-mobile">
      <aside class="site-aside container top-gap scroll-view">
        <ul>
          ${getDocsMenuItems({ relativeToRoot, path })}
        </ul>
      </aside>
      <div class="site-height-0 container"></div>
    </div>
  `;
}

function getDocsMenuItems({ relativeToRoot, path }) {
  return `
    <li>
      <a href="/docs" class="site-text-plain title">Getting Started</a>
      <ul>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/index' })}" href="${relativeToRoot}/docs">Overview</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/get-mobi-css' })}" href="${relativeToRoot}/docs/get-mobi-css.html">Get Mobi.css</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/boilerplate' })}" href="${relativeToRoot}/docs/boilerplate.html">Boilerplate</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/browser-support' })}" href="${relativeToRoot}/docs/browser-support.html">Browser Support</a></li>
      </ul>
    </li>
    <li class="top-gap">
      <a href="/docs/reset.html" class="site-text-plain title">Built-in Plugins</a>
      <ul>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/reset' })}" href="${relativeToRoot}/docs/reset.html">Reset</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/top-gap' })}" href="${relativeToRoot}/docs/top-gap.html">Top Gap</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/show-hide-on-mobile' })}" href="${relativeToRoot}/docs/show-hide-on-mobile.html">Show Hide on Mobile</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/flexbox' })}" href="${relativeToRoot}/docs/flexbox.html">Flexbox</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/container' })}" href="${relativeToRoot}/docs/container.html">Container</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/button' })}" href="${relativeToRoot}/docs/button.html">Button</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/form' })}" href="${relativeToRoot}/docs/form.html">Form</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/scroll-view' })}" href="${relativeToRoot}/docs/scroll-view.html">Scroll View</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/table' })}" href="${relativeToRoot}/docs/table.html">Table</a></li>
        <li><a class="site-text-plain text-small ${getActiveClass({ path, start: 'docs/text' })}" href="${relativeToRoot}/docs/text.html">Text</a></li>
      </ul>
    </li>
  `;
}
