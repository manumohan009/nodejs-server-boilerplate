const response = require('./../libs/response-lib');

const errorHandler = (err, req, res, next) => {
  console.log('application error handler called');
  console.log(err);
  res.send('Some error occured at global level');
}

const notFoundHandler = (req, res, next) => {
  console.log('Global not found handler called');
  res.status(404).send('Route not found in the application');
}

module.exports = {
  globalErrorHandler: errorHandler,
  globalNotFoundHandler: notFoundHandler
}
