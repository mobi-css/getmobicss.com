const header = require('./_partial/_header');

module.exports = ({ content, relativeToRoot }) => `
<!doctype html>
<html lang="en" class="site-height-100">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
      maximum-scale=1.0, user-scalable=no"/>

    <title>Mobi.css</title>

    <link rel="stylesheet" href="https://unpkg.com/mobi.css/dist/mobi.min.css" />
    <link rel="stylesheet" href="${relativeToRoot}/css/site.css" />
  </head>
  <body class="site-height-100">
    <div class="site-height-100 flex-vertical">
      <div class="unit-0">
        ${header({ relativeToRoot })}
      </div>
      <div class="unit scroll-view">
        ${content}
      </div>
    </div>
  </body>
</html>
`;
