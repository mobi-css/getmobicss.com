const path = require('path');

module.exports = ({ filePath, current_check_prefix }) =>
  filePath.indexOf(path.normalize(current_check_prefix)) === 0;
