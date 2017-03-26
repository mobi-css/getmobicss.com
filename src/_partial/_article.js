module.exports = ({ relativeToRoot, content, frontMatter }) => {
  if (relativeToRoot === '.') {
    return `
      <article class="site-article">
        ${content}
      </article>
    `;
  }
  return `
    <div class="site-article flex-center">
      <div class="site-aside container hide-on-mobile"></div>
      <article class="container">
        ${content}
      </article>
    </div>
  `;
};
