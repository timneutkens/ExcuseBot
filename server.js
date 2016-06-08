const excuses = require('excuses').developers;

const token = process.env.SLACK_API_TOKEN || '';
const RtmClient = require('@slack/client').RtmClient;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;
const RTM_CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS.RTM;

const rtm = new RtmClient(token, {});
rtm.start();

// you need to wait for the client to fully connect before you can send messages
rtm.on(RTM_CLIENT_EVENTS.RTM_CONNECTION_OPENED, function () {
  rtm.on(RTM_EVENTS.MESSAGE, function (message) {
    const messageText = typeof message.text !== 'undefined' ? message.text : message.message.text;
    if(messageText.indexOf('I need an excuse') >= 0) {
      rtm.sendMessage(excuses.getRandom(), message.channel);
    }
  });
});
