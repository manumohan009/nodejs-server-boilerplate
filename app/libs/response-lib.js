/* response generation library for api */
const generate = (err, message, status, data) => {
  const response = {
    error: err,
    message: message,
    status: status,
    data: data
  };
  return response;
}

module.exports = {
  generate: generate
}
