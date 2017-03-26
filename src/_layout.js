const head = require('./_partial/_head');
const header = require('./_partial/_header');
const sidebar = require('./_partial/_sidebar');
const article = require('./_partial/_article');

module.exports = ({ content, relativeToRoot, frontMatter, path }) => `
  <!doctype html>
  <html lang="en">
    ${head({ relativeToRoot, frontMatter })}
    <body>
      ${header({ relativeToRoot, frontMatter, path })}
      ${sidebar({ relativeToRoot, path })}
      ${article({ relativeToRoot, content, frontMatter })}
    </body>
  </html>
`;
