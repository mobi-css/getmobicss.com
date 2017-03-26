module.exports = ({ relativeToRoot, content, frontMatter }) => {
  if (relativeToRoot === '.') {
    return `
      <article class="site-article-wrapper">
        ${content}
      </article>
    `;
  }
  return `
    <div class="site-article-wrapper flex-center">
      <div class="site-height-0 site-aside container hide-on-mobile"></div>
      <article class="site-article container">
        ${content}
      </article>
    </div>
  `;
};
