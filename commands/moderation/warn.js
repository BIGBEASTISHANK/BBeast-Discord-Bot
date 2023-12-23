module.exports = {
    name: 'warn',
    permissions: ["MANAGE_GUILD"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {


<<<<<<< HEAD
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
=======
        const warnModel = require('../../models/warn')

        const mentionedMember = message.mentions.members.first()
        || message.guild.members.cache.get(args[0])

    if (!message.member.hasPermission('MANAGE_ROLES')) {
        return message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Error 403', message.author.avatarURL())
            .setDescription('**➥** You don\'t have permission to warn members.')
            .setTimestamp(message.createdAt)
            .setColor('RANDOM'))
    }
    else if (!mentionedMember) {
        return message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Error 403', message.author.avatarURL())
            .setDescription('**➥** You need to mention a member you want to warn.')
            .setTimestamp(message.createdAt)
            .setColor('RANDOM'))
    }

    const mentionedPotision = mentionedMember.roles.highest.position
    const memberPotision = message.member.roles.highest.position

    if (memberPotision <= mentionedPotision) {
        return message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Error 403', message.author.avatarURL())
            .setDescription('**➥** You can\'t warn this member as their role is higher to yours.')
            .setTimestamp(message.createdAt)
            .setColor('RANDOM'))
    }

    const reason = args.slice(1).join(' ') || 'Not Specified'

    let warnDoc = await warnModel.findOne({
        guildID: message.guild.id,
        memberID: mentionedMember.id,
    }).catch(err => console.log(err))

    if (!warnDoc) {
        warnDoc = new warnModel({
            guildID: message.guild.id,
            memberID: mentionedMember.id,
            warnings: [reason],
            moderator: [message.member.id],
            date: [Date.now()],
        })

        await warnDoc.save().catch(err => console.log(err))
    }
    else {
        if (warnDoc.warnings.length >= 3) {
            return message.channel.send(new Discord.MessageEmbed()
                .setAuthor('Error 403', message.author.avatarURL())
                .setDescription('**➥** You can\'t warn this member as they already have 3 warnings.')
                .setTimestamp(message.createdAt)
                .setColor('RANDOM'))
        }

        warnDoc.warnings.push(reason)
        warnDoc.moderator.push(message.member.id)
        warnDoc.date.push(Date.now())

        await warnDoc.save().catch(err => console.log(err))
    }

    message.channel.send(new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.avatarURL())
        .addField("**Memeber**", `${mentionedMember}`)
        .addField("**Action**", "Unmute")
        .addField("**Reason**", `${reason ? `${reason}` : ''}`)
        .setTimestamp(message.createdAt)
        .setThumbnail(mentionedMember.user.displayAvatarURL({ dynamic: true }))
        .setColor('RANDOM'))

>>>>>>> jsmerge
    }
}