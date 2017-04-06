const head = require('./_partial/_head');
const header = require('./_partial/_header');
const sidebar = require('./_partial/_sidebar');
const mobileMenu = require('./_partial/_mobile-menu');
const article = require('./_partial/_article');
const googleAnalytics = require('./_partial/_google-analytics');

module.exports = ({ content, relativeToRoot, frontMatter, title, filePath, config }) => {
  if (frontMatter.redirect) {
    return `
      <!doctype html>
      <html lang="en">
        <head>
          <meta http-equiv="refresh" content="0;url=${frontMatter.redirect}" />
          <title>${title}</title>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `;
  }
  return `
    <!doctype html>
    <html lang="en">
      ${head({ relativeToRoot, title })}
      <body>
        ${header({ relativeToRoot, filePath, config })}
        ${frontMatter.hide_sidebar ? '' : sidebar({ relativeToRoot, filePath, config })}
        ${mobileMenu({ relativeToRoot, frontMatter, filePath, config })}
        ${article({ content, frontMatter })}
        ${googleAnalytics()}
      </body>
    </html>
  `;
};
