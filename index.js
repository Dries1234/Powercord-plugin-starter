const { Plugin } = require('powercord/entities');

module.exports = class Starter extends Plugin {
  startPlugin () {
    this.registerCommand(
      'start',
      ['guide'],
      'A simple guide to plugins',
      '{c}',
      (args) => ({
        send: true,
        result: 'Sends a chat message from your account'
      })
    );
  }
};
