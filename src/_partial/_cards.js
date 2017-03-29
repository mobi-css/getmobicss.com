module.exports = ({ relativeToRoot, cards }) => `
  <div class="flex-center">
    <div class="container-wider">
      <div class="flex-left flex-wrap units-gap">
        ${renderCards({ relativeToRoot, cards })}
      </div>
    </div>
  </div>
`;

function renderCards({ cards }) {
  return cards.reduce((previous, { title, description, github }) => `
    ${previous}
    <div class="unit-1-3 unit-1-on-mobile">
      <h5>
        <a href="${github}">${title}</a>
      </h5>
      <p class="text-small">${description}</p>
    </div>
  `, '');
}
