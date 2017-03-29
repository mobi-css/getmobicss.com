module.exports = ({ content, frontMatter }) => {
  if (frontMatter.hide_sidebar) {
    return `
      <div class="site-article-wrapper">
        ${frontMatter.show_announcement ? renderAnnouncement() : ''}
        <div class="flex-center">
          <div class="container-wider">
            <article class="site-article">
              ${content}
            </article>
          </div>
        </div>
      </div>
    `;
  }
  return `
    <div class="site-article-wrapper">
      ${frontMatter.show_announcement ? renderAnnouncement() : ''}
      <div class="flex-center">
        <div class="container-wider">
          <div class="flex-left units-gap-big">
            <div class="site-height-0 site-aside hide-on-mobile unit-1-4"></div>
            <article class="site-article unit-3-4 unit-1-on-mobile">
              ${content}
            </article>
          </div>
        </div>
      </div>
    </div>
  `;
};

function renderAnnouncement() {
  return `
    <p class="site-warning text-center">
      WARNING: This is the alpha version of Mobi.css 2, please goto <a href="http://v1.getmobicss.com">http://v1.getmobicss.com</a> for a stable version.
    </p>
  `;
}
