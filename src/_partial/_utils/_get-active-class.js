module.exports = ({ path, start }) => {
  if (path.indexOf(start) === 0 || path.indexOf('./' + start) === 0) {
    return 'active';
  }
  return '';
}
