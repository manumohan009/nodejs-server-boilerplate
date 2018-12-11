const trim = (x) => {
  const value = String(x);
  return value.replace(/^\s+|\s+$/gm, '');
}

const isEmpty = (value) => {
  if (value === null || value === undefined || trim(value) === '' || value.length === 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * exporting functions.
 */
module.exports = {
  isEmpty: isEmpty
}
