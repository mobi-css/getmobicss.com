const header = require('../_header');

module.exports = ({ content, relativeToRoot }) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
      maximum-scale=1.0, user-scalable=no"/>

    <title>Mobi.css</title>

    <link rel="stylesheet" href="https://unpkg.com/mobi.css@2.0.0-alpha.5/dist/mobi.min.css" />
    <link rel="stylesheet" href="${relativeToRoot}/css/site.css" />
  </head>
  <body>
    ${header({ relativeToRoot })}
    <div class="flex-center">
      <div class="container-wider">
        <div class="flex-left units-gap-big">
          <div class="site-side-width unit-0 hide-on-mobile">
            Sidebar
          </div>
          <div class="unit unit-1-on-mobile">
            ${content}
          </div>
        </div>
      </div>
    <div>
  </body>
</html>
`;
