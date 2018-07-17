# Netatmo-Wunderground-Agent

This project will integrate Netatmo data with a Weather Underground station.

### Installation

1. Install nodejs
2. `git clone https://github.com/brbeaird/netatmo-wunderground-agent.git`
3. `npm install`
4. Open server.js in a text editor and enter in your Netatmo and Weather Underground credentials (these are never shared or stored anywhere outside of your local machine)
5. `node server.js`

### Advanced: Running in the background
I recommend using pm2 to run the agent in the background and automatically restart it if it crashes for some reason. Steps for that:

1. Stop the agent if it's already running.
2. `npm install -g pm2`
3. `pm2 start ecosystem.config.js`
4. This will automatically spin up an instance of the agent handled by pm2.
5. For more info on pm2 commands, check out http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/
