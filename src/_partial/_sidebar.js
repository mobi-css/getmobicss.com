const isCurrent = require('./_utils/_is-current');

module.exports = ({ relativeToRoot, frontMatter, path, config }) => `
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
              ${renderListItems({ path, config, items: config.nav })}
            </ul>
          </li>
          ${renderMenuItems({ path, config })}
        </ul>
      </div>
    </div>
  </aside>
  ${frontMatter.hide_sidebar ? '' : desktopAside({ path, config })}
`;

function desktopAside({ path, config }) {
  return `
    <div class="site-aside-desktop-wrapper flex-center hide-on-mobile">
      <div class="container-wider site-padding-bottom-0">
        <div class="site-height-100 flex-left units-gap-big">
          <aside class="top-gap unit-1-4 flex-vertical scroll-view">
            <ul class="site-menu-list top-gap-0">
              ${renderMenuItems({ path, config })}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  `;
}

function renderMenuItems({ path, config }) {
  let result = '';
  config.nav.some(({ id: nav_id, menu }) => {
    if (!menu) return false;
    const current_check_prefix = config.pages[nav_id].current_check_prefix;
    if (isCurrent({ path, current_check_prefix })) {
      result = menu.reduce((previous, { id: menu_id, sub_menu }) => `
        ${previous}
        <li class="top-gap">
          <a href="${config.pages[menu_id].link}" class="site-text-plain site-side-title">
            ${config.pages[menu_id].title}
          </a>
          <ul>
            ${renderListItems({ path, config, items: sub_menu })}
          </ul>
        </li>
      `, '');
      return true;
    }
    return false;
  });
  return result;
}

function renderListItems({ path, config, items }) {
  return items.reduce((previous, { id }) => {
    const current_check_prefix = config.pages[id].current_check_prefix;
    return `
      ${previous}
      <li>
        <a
          class="
            site-text-plain text-small
            ${isCurrent({ path, current_check_prefix }) ? 'current' : ''}
          "
          href="${config.pages[id].link}"
        >
          ${config.pages[id].title}
        </a>
      </li>
    `;
  }, '');
}
