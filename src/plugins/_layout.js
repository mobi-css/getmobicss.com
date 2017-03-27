const head = require('../_partial/_head');
const header = require('../_partial/_header');
const sidebar = require('../_partial/_sidebar');
const cards = require('../_partial/_cards');
const googleAnalytics = require('../_partial/_google-analytics');

module.exports = ({ content, relativeToRoot, frontMatter, title, path, config }) => `
  <!doctype html>
  <html lang="en">
    ${head({ relativeToRoot, title })}
    <body>
      ${header({ relativeToRoot, path, config })}
      ${sidebar({ relativeToRoot, frontMatter, path, config })}
      ${cards({ content, cards: config.plugins })}
      ${googleAnalytics()}
    </body>
  </html>
`;
