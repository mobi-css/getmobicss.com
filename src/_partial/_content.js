module.exports = ({ relativeToRoot, content, frontMatter }) => {
  if (frontMatter.isIframe) {
    return `
      <div class="unit flex-vertical">
        ${content}
      </div>
    `;
  }
  if (relativeToRoot === '.') {
    return `
      <div class="unit flex-vertical">
        <div class="scroll-view">
          ${content}
        </div>
      </div>
    `;
  }
  return `
    <div class="site-content unit flex-vertical">
      <div class="scroll-view">
        <div class="flex-center">
          <div class="container">
            ${content}
          </div>
        </div>
      </div>
    </div>
  `;
};
