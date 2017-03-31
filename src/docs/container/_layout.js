const head = require('../../_partial/_head');
const googleAnalytics = require('../../_partial/_google-analytics');

module.exports = ({ title, content, relativeToRoot }) => `
  <!doctype html>
  <html lang="en">
    ${head({ relativeToRoot, title })}
    <body>
      ${content}
      ${googleAnalytics()}
    </body>
  </html>
`;
