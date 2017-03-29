const head = require('../_partial/_head');
const header = require('../_partial/_header');
const sidebar = require('../_partial/_sidebar');
const article = require('../_partial/_article');
const googleAnalytics = require('../_partial/_google-analytics');

module.exports = ({ content, relativeToRoot, frontMatter, title, path, config }) => `
  <!doctype html>
  <html lang="en">
    ${head({ relativeToRoot, title })}
    <body>
      ${header({ relativeToRoot, path, config })}
      ${sidebar({ relativeToRoot, frontMatter, path, config })}
      <div class="flex-center">
        ${article({ content, frontMatter })}
      </div>
      ${googleAnalytics()}
    </body>
  </html>
`;
