# ExcuseBot for Slack
Because developers are lazy ;)

## Installation
1. Clone the repository: `git clone git@github.com:timneutkens/ExcuseBot.git excusebot`
2. Switch to excusebot directory: `cd excusebot`
3. Execute `npm install`
4. Run `SLACK_API_TOKEN='token_here' node server.js`
Replace `token_here` with a SlackBot token created [here (link)](https://my.slack.com/services/new/bot)

## How to use
1. Invite your botuser to a channel `/invite @yourbotname`
2. Say `I need an excuse`
3. ExcuseBot will respond with a random excuse taken from `http://npmjs.com/package/excuses`
