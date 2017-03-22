module.exports = ({ relativeToRoot }) => `
<div class="site-color-background-faded flex-center">
  <header class="container-wider top-gap">
    <div class="flex-left units-gap-big">
      <div class="site-side-width flex-left unit-0">
        <a href="/" class="site-logo-link flex-middle">
          <img src="${relativeToRoot}/img/mobi-logo.png" height="32" />
          &nbsp;&nbsp;
          <h1 class="site-logo-text top-gap-0">Mobi.css</h1>
        </a>
      </div>
      <nav class="site-nav flex-middle units-gap-big unit">
        <a href="/docs" class="site-nav-item unit-0">Docs</a>
        <a href="/plugins" class="site-nav-item unit-0">Plugins</a>
        <a href="/themes" class="site-nav-item unit-0">Themes</a>
        <div class="unit"></div>
        <a href="https://github.com/mobi-css/mobi.css" class="site-nav-item unit-0">GitHub</a>
      </nav>
    </div>
  </header>
</div>
`;
