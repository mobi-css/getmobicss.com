const isCurrent = require('./_utils/_is-current');

module.exports = ({ relativeToRoot, path, config }) => `
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
            ${renderNavItems({ path, items: config.nav })}
            <div class="unit"></div>
            ${renderNextItem({ relativeToRoot, path, nextConfig: config.next })}
          </nav>
        </div>
      </div>
    </div>
  </header>
`;

function renderNavItems({ path, items }) {
  return items.reduce((previous, { text, link, current_check_prefix }) => `
    ${previous}
    <a
      class="
        site-text-plain unit-0 hide-on-mobile
        ${isCurrent({ path, current_check_prefix }) ? 'current' : ''}
      "
      href="${link}"
    >
      ${text}
    </a>
  `, '');
}

function renderNextItem({ relativeToRoot, path, nextConfig }) {
  let result = '';
  nextConfig.some(({ current_check_prefix, next_text, next_link }) => {
    if (isCurrent({ path, current_check_prefix })) {
      result = `
        <a class="site-text-plain flex-middle unit-0" href="${next_link}">
          <div>${next_text}&nbsp;&nbsp;</div>
          <img src="${relativeToRoot}/img/next.png" height="14" />
        </a>
      `;
      return true;
    }
    return false;
  });
  return result;
}
