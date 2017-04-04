const isCurrent = require('./_utils/_is-current');

module.exports = ({ relativeToRoot, filePath, config }) => `
  <header class="site-header flex-center">
    <div class="container-wider">
      <div class="flex-left units-gap-big">
        <div class="hide-on-mobile unit-1-4">
          <a href="/" class="site-text-plain site-side-title flex-middle">
            <img src="${relativeToRoot}/img/mobi-logo.png" height="24" />
            <div>&nbsp;&nbsp;Mobi.css</div>
          </a>
        </div>
        <div class="unit-3-4 unit-1-on-mobile">
          <nav class="flex-middle units-gap-big">
            ${renderNavItems({ filePath, config })}
            <div class="unit"></div>
            ${renderNextItem({ relativeToRoot, filePath, config })}
          </nav>
        </div>
      </div>
    </div>
  </header>
`;

function renderNavItems({ filePath, config }) {
  return config.nav.reduce((previous, { id }) => {
    const current_check_prefix = config.pages[id].current_check_prefix;
    return `
      ${previous}
      <a
        class="
          site-text-plain unit-0 hide-on-mobile
          ${isCurrent({ filePath, current_check_prefix }) ? 'current' : ''}
        "
        href="${config.pages[id].link}"
      >
        ${config.pages[id].title}
      </a>
    `;
  }, '');
}

function renderNextItem({ relativeToRoot, filePath, config }) {
  let result = '';
  Object.keys(config.pages).some(key => {
    const current_check_prefix = config.pages[key].current_check_prefix;
    if (isCurrent({ filePath, current_check_prefix })) {
      const nextPage = config.pages[config.pages[key].next];
      result = `
        <a class="site-text-plain flex-middle unit-0" href="${nextPage.link}">
          <div>${nextPage.title}&nbsp;&nbsp;</div>
          <img src="${relativeToRoot}/img/next.png" height="14" />
        </a>
      `;
      return true;
    }
    return false;
  });
  return result;
}
