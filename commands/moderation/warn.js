module.exports = {
    name: 'warn',
    permissions: ["MANAGE_GUILD"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {


        const mongo = require('../../mongo')
        const warnSchema = require('../../schemas/warn-schema')

        const target = message.mentions.users.first()
        if (!target) {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'Please specify someone to warn.' } })
            return
        }

        args.shift()

        const guildId = message.guild.id
        const userId = target.id
        const reason = args.join(' ')

        const warning = {
            author: message.member.user.tag,
            timestamp: new Date().getTime(),
            reason,
        }

        await mongo().then(async (mongoose) => {
            try {
                await warnSchema.findOneAndUpdate(
                    {
                        guildId,
                        userId,
                    },
                    {
                        guildId,
                        userId,
                        $push: {
                            warnings: warning,
                        },
                    },
                    {
                        upsert: true,
                    }
                )
            } finally {
                mongoose.connection.close()
            }
        })

        if (target) {
            message.channel.send({ embed: { color: `#00f2ff`, description: `${target} have been warned! Reason: *****${reason}*****` } })
            
            const image = message.guild.iconURL({ dynamic: true })
            const userID = message.mentions.users.first()
            const personwarned = client.users.cache.get(userID.id)
            const warned = new Discord.MessageEmbed()
                .setColor('#00f2ff')
                .setTitle('New Warning!')
                .addField('Author', message.author.toString(), true)
                .addField('Guild', message.guild.name, true)
                .addField('Reason', reason)
                .setThumbnail(image)
                .setTimestamp();

            personwarned.send(warned);
            return
        }
    }
}