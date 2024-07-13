var netatmoWunderground = require('netatmo-wunderground-pws')
const express = require("express");
const app = express();
app.get("/health", (req, res) => {
  let clientData = netatmoWundergroundUploader.getClientDetails();
  if (clientData.accessToken){
    res.send({ success: true, message: "It is working" });
  }
  else{
    res.send({ success: false, message: "Auth failure" });
  }

});

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
  }, 60 * 1 * 1000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});