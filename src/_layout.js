const head = require('./_partial/_head');
const header = require('./_partial/_header');
const sidebar = require('./_partial/_sidebar');
const mainContent = require('./_partial/_content');

module.exports = ({ content, relativeToRoot, frontMatter, path }) => `
  <!doctype html>
  <html lang="en" class="site-height-100">
    ${head({ relativeToRoot, frontMatter })}
    <body class="site-height-100">
      <div class="site-height-100 flex-vertical">
        <div class="unit-0">
          ${header({ relativeToRoot, frontMatter, path })}
        </div>
        <div class="unit flex-left">
          ${sidebar({ relativeToRoot, path })}
          ${mainContent({ relativeToRoot, content, frontMatter })}
        </div>
      </div>
    </body>
  </html>
`;
