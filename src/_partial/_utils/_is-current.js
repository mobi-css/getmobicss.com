module.exports = ({ filePath, current_check_prefix }) =>
  filePath.indexOf(current_check_prefix) === 0;
