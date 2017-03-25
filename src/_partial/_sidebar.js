module.exports = ({ relativeToRoot, frontMatter }) => `
<aside class="show-on-mobile">
  <input type="checkbox" id="menu-toggle" class="site-mobile-menu-toggle" />
  <div class="site-mobile-menu-container flex-vertical">
    <div class="unit-1 scroll-view">
      <div class="site-side top-gap container">
        <ul>
          <li>
            <a href="/" class="site-text-plain active">Mobi.css</a>
            <ul>
              <li><a class="site-text-plain" href="/docs">Docs</a></li>
              <li><a class="site-text-plain" href="/plugins">Plugins</a></li>
              <li><a class="site-text-plain" href="/themes">Themes</a></li>
            </ul>
          </li>
          <li class="top-gap"></li>
          ${getDocsMenuItems({ relativeToRoot })}
        </ul>
      </div>
    </div>
  </div>
</aside>
${relativeToRoot === '.' ? '' : desktopAside({ relativeToRoot })}
`;

function desktopAside({ relativeToRoot }) {
  return `
    <aside class="site-side hide-on-mobile scroll-view">
      <div class="top-gap container">
        <ul>
          ${getDocsMenuItems({ relativeToRoot })}
        </ul>
      </div>
    </aside>
  `;
}

function getDocsMenuItems({ relativeToRoot }) {
  return `
    <li>
      <a href="/docs" class="site-text-plain active">Getting Started</a>
      <ul>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs">Overview</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/get-mobi-css.html">Get Mobi.css</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/boilerplate.html">Boilerplate</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/browser-support.html">Browser Support</a></li>
      </ul>
    </li>
    <li class="top-gap">
      <a href="/docs/reset.html" class="site-text-plain active">Built-in Plugins</a>
      <ul>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/reset.html">Reset</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/top-gap.html">Top Gap</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/show-hide-on-mobile.html">Show Hide on Mobile</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/flexbox.html">Flexbox</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/container.html">Container</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/button.html">Button</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/form.html">Form</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/scroll-view.html">Scroll View</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/table.html">Table</a></li>
        <li><a class="site-text-plain" href="${relativeToRoot}/docs/text.html">Text</a></li>
      </ul>
    </li>
  `;
}
