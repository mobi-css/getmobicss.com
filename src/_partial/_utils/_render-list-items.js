const isCurrent = require('./_is-current');

module.exports = ({ filePath, config, items }) => items.reduce((previous, { id }) => {
  const current_check_prefix = config.pages[id].current_check_prefix;
  return `
    ${previous}
    <li>
      <a
        class="
          site-text-plain text-small
          ${isCurrent({ filePath, current_check_prefix }) ? 'current' : ''}
        "
        href="${config.pages[id].link}"
      >
        ${config.pages[id].title}
      </a>
    </li>
  `;
}, '');
