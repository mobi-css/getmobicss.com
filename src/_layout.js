const head = require('./_partial/_head');
const header = require('./_partial/_header');
const sidebar = require('./_partial/_sidebar');
const article = require('./_partial/_article');
const googleAnalytics = require('./_partial/_google-analytics');

module.exports = ({ content, relativeToRoot, frontMatter, title, path }) => `
  <!doctype html>
  <html lang="en">
    ${head({ relativeToRoot, title })}
    <body>
      ${header({ relativeToRoot, frontMatter, path })}
      ${sidebar({ relativeToRoot, path })}
      ${article({ relativeToRoot, content, frontMatter })}
      ${googleAnalytics()}
    </body>
  </html>
`;
