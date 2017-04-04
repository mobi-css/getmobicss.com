module.exports = ({ relativeToRoot, title }) => `
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
      maximum-scale=1.0, user-scalable=no"/>

    <title>${title ? `${title} | ` : ''}Mobi.css</title>

    <link rel="stylesheet" href="${relativeToRoot}/css/mobi.css/mobi.min.css" />
    <link rel="stylesheet" href="${relativeToRoot}/css/mobi.css/mobi-plugin-prism.min.css" />
    <link rel="stylesheet" href="${relativeToRoot}/css/site.css" />
  </head>
`;
