module.exports = ({ relativeToRoot, content, frontMatter }) => {
  if (frontMatter.isIframe) {
    return `
      <article class="unit flex-vertical">
        ${content}
      </article>
    `;
  }
  if (relativeToRoot === '.') {
    return `
      <div class="unit flex-vertical">
        <article class="scroll-view">
          ${content}
        </article>
      </div>
    `;
  }
  return `
    <div class="site-content unit flex-vertical">
      <div class="scroll-view">
        <div class="flex-center">
          <article class="container">
            ${content}
          </article>
        </div>
      </div>
    </div>
  `;
};
