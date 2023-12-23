module.exports = {
    name: 'Calculator',
    aliases: ['cal'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

      const { Calculator } = require('weky')
      await Calculator(message)

    }
};
