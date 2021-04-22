module.exports = {
    name: 'listwarn',
    aliases: ['lw'],
    permissions: ["MANAGE_GUILD"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        const mongo = require('../../mongo')
        const warnSchema = require('../../schemas/warn-schema')

        const target = message.mentions.users.first()
        if (!target) {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'Please specify a user to load the warnings for.' } })
            return
        }

        const guildId = message.guild.id
        const userId = target.id

        await mongo().then(async (mongoose) => {
            try {
                const results = await warnSchema.findOne({
                    guildId,
                    userId,
                })

                let reply = `Previous warnings for <@${userId}>:\n\n`

                message.channel.send({ embed: { color: `#00f2ff`, description: `${reply}` } })

                for (const warning of results   .warnings) {
                    const { author, timestamp, reason } = warning

                    message.channel.send({
                        embed: {
                            color: `#00f2ff`, description: `By **${author}** on **${new Date(
                                timestamp
                            ).toLocaleDateString()}** for "*****${reason}*****"\n\n`
                        }
                    })
                }

            } finally {
                mongoose.connection.close()
            }
        })
    }
}