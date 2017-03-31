const normalize = require('path').normalize;

// https://github.com/xcatliu/pagic/issues/9

module.exports = ({ path, current_check_prefix }) =>
  normalize(path).indexOf(normalize(current_check_prefix)) === 0;
