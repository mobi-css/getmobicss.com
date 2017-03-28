module.exports = ({ content, relativeToRoot, cards }) => {
  return `
    <div class="site-article-wrapper flex-center">
      <div class="container-wider">
        <article class="site-article">
          ${content}
          <div class="flex-left flex-wrap units-gap top-gap">
            ${renderCards({ relativeToRoot, cards })}
          </div>
        </article>
      </div>
    </div>
  `;
};

function renderCards({ relativeToRoot, cards }) {
  return cards.reduce((previous, { title, description, github }) => {
    return previous + `
      <div class="unit-1-3 unit-1-on-mobile">
        <h5>
          <a href="${github}">${title}</a>
        </h5>
        <p class="text-small">${description}</p>
      </div>
    `;
  }, '');
}
