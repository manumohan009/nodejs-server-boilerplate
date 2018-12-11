let appConfig = {};

appConfig.port = 9000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
  uri: 'mongodb://127.0.0.1:27017/clientPanelDB'
  // uri: 'mongodb+srv://manu:amma@cluster0-kd771.mongodb.net/test?retryWrites=true',
}
appConfig.baseURL = '/api/v1';

module.exports = {
  port: appConfig.port,
  allowedCorsOrigin: appConfig.allowedCorsOrigin,
  environment: appConfig.env,
  db: appConfig.db,
  baseURL: appConfig.baseURL

}// end module exports
