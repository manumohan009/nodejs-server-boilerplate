const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client-controller');
const appConfig = require('./../../config/app-config');
const auth = require('./../middlewares/auth');

module.exports.setRouter = (app) =>{
  let baseUrl = `${appConfig.apiVersion}/clients`;


  app.get(baseUrl+'/all', clientController.getAllClient);
  // http://localhost:9000/api/v1/clients/all?authToken=Admin
  // To generate api documentation >apidoc -i app/routes/ -o apidoc/

	/**
	 * @api {get} /api/v1/clients/all Get all clients
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Client Details Found",
	    "status": 200,
	    "data": [
					{
						clientId: "string",
						firstName: "string",
            lastName: "string",
						email: "string",
						phone: number,
						balance: boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Client Details",
	    "status": 500,
	    "data": null
	   }
	 */

  app.get(baseUrl+'/view/:clientId',clientController.viewByClientId);
  // http://localhost:9000/api/v1/clients/view/1?authToken=Admin

  /**
	 * @api {get} /api/v1/clients/view/:clientId Get a single client
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} clientId The clientId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Client Found Successfully.",
	    "status": 200,
	    "data": {
              _id: "string",
              __v: number
            clientId: "string",
						firstName: "string",
						lastName: "string",
						email: "string",
						phone: number,
						balance: boolean
          }
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

  // app.get(baseUrl+'/view/by/author/:author',auth.isAuthenticated,blogController.viewByAuthor);
  // app.get(baseUrl+'/view/by/category/:category',auth.isAuthenticated,blogController.viewByCategory);

  // app.post(baseUrl+'/:clientId/delete',auth.isAuthenticated,clientController.deleteClient);

   /**
	 * @api {post} /api/v1/clients/:clientId/delete Delete client by clientId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} clientId clientId of the client passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Client Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

  // app.put(baseUrl+'/:clientId/edit',auth.isAuthenticated,clientController.editClient);

  /**
	 * @api {put} /api/v1/clients/:clientId/edit Edit client by clientId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} clientId clientId of the client passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Client Edited Successfully.",
	    "status": 200,
	    "data": [
					{
						clientId: "string",
						firstName: "string",
						lastName: "string",
						email: "string",
						phone: number,
						balance: boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

  // app.post(baseUrl+'/create',auth.isAuthenticated,clientController.createClient);

  /**
	 * @api {post} /api/v1/clients/create Create client
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} firstName first name of the client passed as a body parameter
	 * @apiParam {String} lastName last name of the client passed as a body parameter
	 * @apiParam {String} email email of the client passed as a body parameter
	 * @apiParam {String} phone phone of the client passed as a body parameter
	 * @apiParam {String} balance balance of the client passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Client Created successfully",
	    "status": 200,
	    "data": [
					{
						clientId: "string",
						firstName: "string",
						lastName: "string",
						email: "string",
						phone: number,
						balance: boolean
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

}
