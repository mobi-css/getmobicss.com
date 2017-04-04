const head = require('../_partial/_head');
const header = require('../_partial/_header');
const sidebar = require('../_partial/_sidebar');
const article = require('../_partial/_article');
const cards = require('../_partial/_cards');
const googleAnalytics = require('../_partial/_google-analytics');

module.exports = ({ content, relativeToRoot, frontMatter, title, filePath, config }) => `
  <!doctype html>
  <html lang="en">
    ${head({ relativeToRoot, title })}
    <body>
      ${header({ relativeToRoot, filePath, config })}
      ${sidebar({ relativeToRoot, frontMatter, filePath, config })}
      ${article({ content, frontMatter })}
      ${cards({ relativeToRoot, cards: config.themes })}
      ${googleAnalytics()}
    </body>
  </html>
`;
