const head = require('./_partial/_head');
const header = require('./_partial/_header');
const sidebar = require('./_partial/_sidebar');
const article = require('./_partial/_article');
const googleAnalytics = require('./_partial/_google-analytics');

module.exports = ({ content, relativeToRoot, frontMatter, title, path, config }) => {
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
        ${header({ relativeToRoot, path, config })}
        ${sidebar({ relativeToRoot, frontMatter, path, config })}
        ${article({ content, frontMatter })}
        ${googleAnalytics()}
      </body>
    </html>
  `;
};
