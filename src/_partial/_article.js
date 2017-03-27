module.exports = ({ content, frontMatter }) => {
  if (frontMatter.hide_sidebar) {
    return `
      <div class="site-article-wrapper">
        <article class="site-article">
          ${content}
        </article>
      </div>
    `;
  }
  return `
    <div class="site-article-wrapper flex-center">
      <div class="container-wider">
        <div class="flex-left units-gap-big">
          <div class="site-height-0 site-aside hide-on-mobile unit-1-4"></div>
          <article class="site-article unit-3-4 unit-1-on-mobile">
            ${content}
          </article>
        </div>
      </div>
    </div>
  `;
};
