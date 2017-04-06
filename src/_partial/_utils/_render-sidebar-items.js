const isCurrent = require('./_is-current');
const renderListItems = require('./_render-list-items');

module.exports = ({ filePath, config }) => {
  let result = '';
  config.nav.some(({ id: nav_id, menu }) => {
    if (!menu) return false;
    const current_check_prefix = config.pages[nav_id].current_check_prefix;
    if (isCurrent({ filePath, current_check_prefix })) {
      result = menu.reduce((previous, { id: menu_id, sub_menu }) => `
        ${previous}
        <li class="top-gap">
          <a href="${config.pages[menu_id].link}" class="site-text-plain site-side-title">
            ${config.pages[menu_id].title}
          </a>
          <ul>
            ${renderListItems({ filePath, config, items: sub_menu })}
          </ul>
        </li>
      `, '');
      return true;
    }
    return false;
  });
  return result;
};
