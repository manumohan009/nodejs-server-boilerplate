const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('../libs/time-lib');
const response = require('../libs/response-lib');
const logger = require('../libs/logger-lib');
const validateInput = require('../libs/params-validation-lib');
const check = require('../libs/check-lib');

/* Models */
const ClientModel = mongoose.model('Client');

/**
 * function to read all client
 */
const getAllClient = (req, res) => {
    ClientModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err);
                logger.error(err.message, 'Client Controller: getAllClient', 10);
                const apiResponse = response.generate(true, 'Failed To Find Client Details', 500, null);
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                logger.info('No Client Found', 'Client Controller: getAllClient');
                const apiResponse = response.generate(true, 'No Client Found', 404, null);
                res.send(apiResponse);
            } else {
              const apiResponse = response.generate(false, 'All Client Details Found', 200, result);
                res.send(apiResponse);
            }
        });
}// end get all clients

const viewByClientId = (req, res) => {
  if(check.isEmpty(req.params.clientId)){ // if there is no clientId passed
    console.log('clientId should be passed');
    const apiResponse = response.generate(true, 'clientId is missing', 403, null);
    res.send(apiResponse);
  } else { // if clientId param is not empty
    ClientModel.findOne({'clientId': req.params.clientId }, (err, result) => {
      if(err) {
        console.log('Error Occured');
        logger.error(`Error Occured: ${err}`, 'Database', 10);
        const apiResponse = response.generate(true,'Error Occured', 500, null);
        res.send(apiResponse);
      } else if(check.isEmpty(result)) { // if no records found
        console.log('Client Not Found');
        const apiResponse = response.generate(true, 'Client Not Found', 404, null);
        res.send(apiResponse);
      } else { // if a record is found
        logger.info('Client found successfully', 'ClientController:ViewClientById', 5);
        const apiResponse = response.generate(false, 'Client Found Successfully', 200, result);
        res.send(apiResponse);
      }
    });
  }
}

module.exports = {
    getAllClient: getAllClient,
    viewByClientId: viewByClientId
}// end exports
