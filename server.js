var netatmoWunderground = require('netatmo-wunderground-pws')

//Set auth vars
var authInfo = {
    "netamo_client_id": "YourClientId",
    "netamo_client_secret": "YourclientSecret",
    "netamo_username": "YourUsername",
    "netamo_password": "YourPassword",
    "wundergroundStationId": "YourStation",
    "wundergroundUserPassword": "YourSiteLoginPassword"
  };

netatmoWundergroundUploader = new netatmoWunderground(authInfo);

//Send data on startup
netatmoWundergroundUploader.getNetatmoData();

//Refresh and upload data every 2.5 minutes
setInterval(function() {
    netatmoWundergroundUploader.getNetatmoData();
  }, 150000);