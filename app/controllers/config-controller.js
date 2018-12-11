"use strict";
const logger = require('pino')();
const config = require('./../../config/config.json');

const env  = config.env;

const ConfigHelper = {
    envConfig:config[env],
    getConfig:function(){
        return this.envConfig;
    }
};
if(ConfigHelper.envConfig){
    logger.info(ConfigHelper.envConfig);
}
module.exports = ConfigHelper.envConfig;