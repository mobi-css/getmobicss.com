module.exports = ({ path, current_check_prefix }) => {
  return path.indexOf(current_check_prefix) === 0 || path.indexOf('./' + current_check_prefix) === 0;
}
