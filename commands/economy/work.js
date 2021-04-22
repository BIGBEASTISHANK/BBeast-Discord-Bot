module.exports = {
    name: 'work',
    aliases: [],
    permissions: [],
    cooldown: 3600,
    async execute(client, message, cmd, args, Discord) {

        const economy = require('./addons/economy')
        const mention = message.mentions.users.first() || message.author


        const bbics = Math.floor(Math.random() * (1000 - 100) + 100);

        const guildId = message.guild.id
        const userId = mention.id

        const newbbics = await economy.addbbics(guildId, userId, bbics)


        message.channel.send({ embed: { color: `#00f2ff`, description: `<@${userId}> has worked hard and earned **${bbics}**. They now have **${newbbics} BBIC(s)**!` } })
    }
}