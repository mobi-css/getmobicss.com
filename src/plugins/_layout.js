const head = require('../_partial/_head');
const header = require('../_partial/_header');
const sidebar = require('../_partial/_sidebar');
const article = require('../_partial/_article');
const cards = require('../_partial/_cards');
const googleAnalytics = require('../_partial/_google-analytics');

module.exports = ({ content, relativeToRoot, frontMatter, title, path, config }) => `
  <!doctype html>
  <html lang="en">
    ${head({ relativeToRoot, title })}
    <body>
      ${header({ relativeToRoot, path, config })}
      ${sidebar({ relativeToRoot, frontMatter, path, config })}
      ${article({ content, frontMatter })}
      ${cards({ relativeToRoot, cards: config.plugins })}
      ${googleAnalytics()}
    </body>
  </html>
`;
