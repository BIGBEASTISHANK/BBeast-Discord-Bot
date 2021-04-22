module.exports = {
    name: 'addbalance',
    aliases: ['addbal', 'adbl'],
    permissions: ["MANAGE_GUILD"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        const economy = require('./addons/economy')
        const mention = message.mentions.users.first()

        if (!mention) {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'Please **tag** a user to add BBIC(s) to.' } })
            return
        }

        const bbics = args[1]
        if (isNaN(bbics)) {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'Please provide a valid **numnber** of BBIC(s).' } })
            return
        }

        const guildId = message.guild.id
        const userId = mention.id

        const newbbics = await economy.addbbics(guildId, userId, bbics)


        message.channel.send({ embed: { color: `#00f2ff`, description: `You have given <@${userId}> **${bbics} BBIC(s)**. They now have **${newbbics} BBIC(s)**!` } })

    }
}