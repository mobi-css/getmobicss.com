module.exports = ({ content, cards }) => {
  return `
    <div class="site-article-wrapper flex-center">
      <div class="container-wider">
        <article class="site-article">
          ${content}
          <div class="flex-left flex-wrap units-gap-big">
            ${renderCards(cards)}
          </div>
        </article>
      </div>
    </div>
  `;
};

function renderCards(cards) {
  return cards.reduce((previous, { title, description, docs, github, standalone }) => {
    return previous + `
      <div class="unit-1-3 unit-1-on-mobile top-gap">
        <div class="site-card">
          <h4><a href="${docs}">${title}</a></h4>
          <p>${description}</p>
        </div>
      </div>
    `;
  }, '');
}
