const ms = require('ms')

module.exports = {
    name: 'uptime',
    aliases: [],
    permissions: [],
    cooldown: 2,
    async execute(client, message, cmd, args, Discord) {

        message.channel.send({ embed: { color: `RANDOM`, description: `I have been online for **${ms(client.uptime, { long: true })}**` } })
    }
}