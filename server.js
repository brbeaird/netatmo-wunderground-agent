var netatmoWunderground = require('netatmo-wunderground-pws')

//Set auth vars
var authInfo = {
    "netamo_client_id": process.env.netamo_client_id || "YourClientId",
    "netamo_client_secret": process.env.netamo_client_secret || "YourclientSecret",
    "netamo_accessToken": process.env.netamo_accessToken || "YourAccessToken",
    "netamo_refreshToken": process.env.netamo_refreshToken || "YourRefreshToken",
    "netamo_tokenFileDirectory": process.env.netamo_tokenFileDirectory || "/temp",
    "wundergroundStationId": process.env.wundergroundStationId || "YourStation",
    "wundergroundUserPassword": process.env.wundergroundUserPassword || "YourSiteLoginPassword"
  };

netatmoWundergroundUploader = new netatmoWunderground(authInfo);

//Send data on startup
netatmoWundergroundUploader.getNetatmoData();

//Refresh and upload data every 2.5 minutes
setInterval(function() {
    netatmoWundergroundUploader.getNetatmoData();
  }, 60 * 2.5 * 1000);