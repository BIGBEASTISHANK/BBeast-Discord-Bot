module.exports = {
    name: 'balance',
    aliases: ['bal'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        const economy = require('./addons/economy')

        const target = message.mentions.users.first() || message.author

        const guildId = message.guild.id
        const userId = target.id

        const bbics = await economy.getbbics(guildId, userId)

        message.channel.send({ embed: { color: `#00f2ff`, description: `${target} has **${bbics} BBIC(s)**!` } })
    }
}