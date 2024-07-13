# Netatmo-Wunderground-Agent

This project will integrate Netatmo data with a Weather Underground station.

### Authentication
Netatmo uses an OAuth flow with access and refresh tokens, which expire after some time. You will need to generate these and add them as environment variables for startup. The Docker container will keep up with rotating them going forward, storing them in a file under /temp. If you want the config to persist across docker container recreation, map the /temp folder.

Follow these steps to generate the tokens:
1. Login to https://dev.netatmo.com/apps and create an app
2. Click on the app and scroll down to the Token Generator field
3. In the Scopes drop-down, choose "read_station" and click "Generate Token." Follow the prompts, and you should end up with Access Token and Refresh Token values.

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

Docker: https://hub.docker.com/repository/docker/brbeaird/netatmo-wunderground-agent
