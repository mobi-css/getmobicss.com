module.exports = ({ relativeToRoot }) => `
<header class="container-fluid">
  <div class="flex-left top-gap show-on-mobile">
    <input type="checkbox" id="menu-toggle" class="site-mobile-menu-toggle" />
    <label for="menu-toggle" class="site-mobile-menu-button"><img src="${relativeToRoot}/img/menu.png" height="24" /></label>
    <div class="site-mobile-menu-container">
      <div class="site-side">
        <ul>
          <li><a href="/" class="site-text-plain">Mobi.css</a></li>
          <li><a class="site-text-plain" href="/docs">Docs</a></li>
          <li><a class="site-text-plain" href="/plugins">Plugins</a></li>
          <li><a class="site-text-plain" href="/themes">Themes</a></li>
          <li><a class="site-text-plain" href="https://github.com/mobi-css/mobi.css">GitHub</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flex-left top-gap hide-on-mobile">
    <div class="unit-0">
      <div class="site-side flex-left">
        <a href="/" class="site-text-plain flex-middle">
          <img src="${relativeToRoot}/img/mobi-logo.png" height="32" />
          <div>&nbsp;Mobi.css</div>
        </a>
      </div>
    </div>
    <nav class="flex-left flex-middle unit units-gap-big">
      <a href="/docs" class="site-text-plain unit-0">Docs</a>
      <a href="/plugins" class="site-text-plain unit-0">Plugins</a>
      <a href="/themes" class="site-text-plain unit-0">Themes</a>
      <div class="unit"></div>
      <a href="https://github.com/mobi-css/mobi.css" class="site-text-plain unit-0">GitHub</a>
    </nav>
  </div>
</header>
`;
