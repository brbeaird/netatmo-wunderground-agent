var netatmoWunderground = require('netatmo-wunderground-pws')

//Set auth vars
var authInfo = {
    "netamo_client_id": process.env.netamo_client_id || "YourClientId",
    "netamo_client_secret": process.env.netamo_client_secret || "YourclientSecret",
    "netamo_username": process.env.netamo_username || "YourUsername",
    "netamo_password": process.env.netamo_password || "YourPassword",
    "wundergroundStationId": process.env.wundergroundStationId || "YourStation",
    "wundergroundUserPassword": process.env.wundergroundUserPassword || "YourSiteLoginPassword"
  };

netatmoWundergroundUploader = new netatmoWunderground(authInfo);

//Send data on startup
netatmoWundergroundUploader.getNetatmoData();

//Refresh and upload data every 2.5 minutes
setInterval(function() {
    netatmoWundergroundUploader.getNetatmoData();
  }, 150000);