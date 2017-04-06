const renderSidebarItems = require('./_utils/_render-sidebar-items');

module.exports = ({ filePath, config }) => `
  <div class="site-aside-desktop-wrapper flex-center hide-on-mobile">
    <div class="container-wider site-padding-bottom-0">
      <div class="site-height-100 flex-left units-gap-big">
        <aside class="top-gap unit-1-4 flex-vertical scroll-view">
          <ul class="site-menu-list top-gap-0">
            ${renderSidebarItems({ filePath, config })}
          </ul>
        </aside>
      </div>
    </div>
  </div>
`;
