module.exports = ({ relativeToRoot, frontMatter, path }) => `
  <p class="site-warning text-center">
    WARNING: This is the alpha version of Mobi.css v2, please goto <a href="http://v1.getmobicss.com">http://v1.getmobicss.com</a> for a stable version.
  </p>
  <header class="site-header">
    <div class="flex-left top-gap">
      <div class="site-side unit-0 container flex-left hide-on-mobile">
        <a href="/" class="site-text-plain ${getActiveClass({ path, start: '' })} flex-middle">
          <img src="${relativeToRoot}/img/mobi-logo.png" height="24" />
          <div>&nbsp;&nbsp;Mobi.css</div>
        </a>
      </div>
      <div class="unit flex-center">
        <nav class="container">
          <div class="flex-middle units-gap-big">
            <label for="menu-toggle" class="site-mobile-menu-button show-on-mobile unit-0"><img src="${relativeToRoot}/img/menu.png" height="24" /></label>
            <a href="/docs" class="site-text-plain ${getActiveClass({ path, start: 'docs' })} unit-0 hide-on-mobile">Docs</a>
            <a href="/plugins" class="site-text-plain ${getActiveClass({ path, start: 'plugins' })} unit-0 hide-on-mobile">Plugins</a>
            <a href="/themes" class="site-text-plain ${getActiveClass({ path, start: 'themes' })} unit-0 hide-on-mobile">Themes</a>
            ${next({ relativeToRoot, frontMatter })}
          </div>
        </nav>
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

function getActiveClass({ path, start }) {
  if (start === '') {
    if (path === 'index.md' || path === './index.md') {
      return 'active';
    }
    return '';
  }
  if (path.indexOf(start) === 0 || path.indexOf('./' + start) === 0) {
    return 'active';
  }
  return '';
}
