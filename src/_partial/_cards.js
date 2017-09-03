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
  return cards.reduce((previous, { title, description, link }) => `
    ${previous}
    <div class="unit-1-3 unit-1-on-mobile">
      <h5>
        <a href="${link}">${title}</a>
      </h5>
      <p class="text-small">${description}</p>
    </div>
  `, '');
}
