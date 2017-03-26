const getActiveClass = require('./_get-active-class');

module.exports = ({ relativeToRoot, frontMatter, path }) => `
  <header class="site-header flex-center">
    <div class="site-aside container hide-on-mobile">
      <a href="/" class="site-text-plain title flex-middle">
        <img src="${relativeToRoot}/img/mobi-logo.png" height="24" />
        <div>&nbsp;&nbsp;Mobi.css</div>
      </a>
    </div>
    <div class="container">
      <div class="flex-middle units-gap-big">
        <a href="/docs" class="site-text-plain ${getActiveClass({ path, start: 'docs' })} unit-0 hide-on-mobile">Docs</a>
        <a href="/plugins" class="site-text-plain ${getActiveClass({ path, start: 'plugins' })} unit-0 hide-on-mobile">Plugins</a>
        <a href="/themes" class="site-text-plain ${getActiveClass({ path, start: 'themes' })} unit-0 hide-on-mobile">Themes</a>
        ${next({ relativeToRoot, frontMatter })}
      </div>
    </div>
  </header>
`;

function next({ relativeToRoot, frontMatter }) {
  if (!frontMatter.next) {
    return '';
  }
  return `
    <div class="unit"></div>
    <a class="site-text-plain flex-middle unit-0" href="${frontMatter.next.url}">
      <div>${frontMatter.next.text}&nbsp;&nbsp;</div>
      <img src="${relativeToRoot}/img/next.png" height="14" />
    </a>
  `;
}
