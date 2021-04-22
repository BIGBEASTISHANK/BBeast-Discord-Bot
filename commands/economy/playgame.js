module.exports = {
    name: 'playgame',
    aliases: [],
    permissions: [],
    cooldown: 18000,
    async execute(client, message, cmd, args, Discord) {

        const economy = require('./addons/economy')
        const mention = message.mentions.users.first() || message.author


        const bbics = Math.floor(Math.random() * (20 - 1) + 1);

        const guildId = message.guild.id
        const userId = mention.id

        const newbbics = await economy.addbbics(guildId, userId, bbics)


        message.channel.send({ embed: { color: `#00f2ff`, description: `<@${userId}> played MPL and earned **${bbics}**. They now have **${newbbics} BBIC(s)**!` } })
    }
}