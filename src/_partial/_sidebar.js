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
              ${renderListItems({ path, items: config.nav })}
            </ul>
          </li>
          ${renderDocsMenuItems({ relativeToRoot, path, docsMenu: config.docs_menu })}
        </ul>
      </div>
    </div>
  </aside>
  ${frontMatter.hide_sidebar ? '' : desktopAside({ relativeToRoot, path, config })}
`;

function desktopAside({ relativeToRoot, path, config }) {
  return `
    <div class="site-aside-desktop-wrapper flex-center hide-on-mobile">
      <div class="container-wider site-padding-bottom-0">
        <div class="site-height-100 flex-left units-gap-big">
          <aside class="top-gap unit-1-4 flex-vertical scroll-view">
            <ul class="site-menu-list top-gap-0">
              ${renderDocsMenuItems({ relativeToRoot, path, docsMenu: config.docs_menu })}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  `;
}

function renderDocsMenuItems({ relativeToRoot, path, docsMenu }) {
  return docsMenu.reduce((previous, { text, link, sub_menu }) => {
    return previous + `
      <li class="top-gap">
        <a href="${link}" class="site-text-plain site-side-title">${text}</a>
        <ul>
          ${renderListItems({ path, items: sub_menu })}
        </ul>
      </li>
    `;
  }, '');
}

function renderListItems({ path, items }) {
  return items.reduce((previous, { text, link, current_check_prefix }) => {
    return previous + `
      <li>
        <a
          class="site-text-plain text-small ${isCurrent({ path, current_check_prefix }) ? 'current' : ''}"
          href="${link}"
        >
          ${text}
        </a>
      </li>
    `;
  }, '');
}
