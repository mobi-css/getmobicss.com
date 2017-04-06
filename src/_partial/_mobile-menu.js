const renderListItems = require('./_utils/_render-list-items');
const renderSidebarItems = require('./_utils/_render-sidebar-items');

module.exports = ({ relativeToRoot, filePath, config }) => `
  <aside class="show-on-mobile">
    <input type="checkbox" id="site-aside-toggle-checkbox" class="hide-on-mobile" />
    <label class="site-aside-toggle-button" for="site-aside-toggle-checkbox">
      <img src="${relativeToRoot}/img/menu.png" height="24" />
    </label>
    <div class="site-aside-mobile-wrapper flex-vertical">
      <div class="unit-1 scroll-view">
        <ul class="site-menu-list">
          <li>
            <a href="/" class="site-text-plain site-side-title">Mobi.css</a>
            <ul>
              ${renderListItems({ filePath, config, items: config.nav })}
            </ul>
          </li>
          ${renderSidebarItems({ filePath, config })}
        </ul>
      </div>
    </div>
  </aside>
`;
