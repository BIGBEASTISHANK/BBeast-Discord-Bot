module.exports = {
    name: 'daily',
    aliases: [],
    permissions: [],
    cooldown: 86400,
    async execute(client, message, cmd, args, Discord) {

        const economy = require('./addons/economy')
        const mention = message.mentions.users.first() || message.author


        const bbics = 50

        const guildId = message.guild.id
        const userId = mention.id

        const newbbics = await economy.addbbics(guildId, userId, bbics)


        message.channel.send({ embed: { color: `#00f2ff`, description: `<@${userId}> has earned a daily wages of **${bbics}**, He now has **${newbbics}**!` } })
    }
}
