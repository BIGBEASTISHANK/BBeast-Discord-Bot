const warnModel = require('../../models/warn');
const Discord = require('discord.js');

module.exports = {
    name: 'unwarn',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

          const mentionedMember = message.mentions.members.first()
        || message.guild.members.cache.get(args[0])

    if (!message.member.hasPermission('MANAGE_ROLES')) {
        return message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Error 403', message.author.avatarURL())
            .setDescription('**➥** You don\'t have permission to unwarn members.')
            .setTimestamp(message.createdAt)
            .setColor('RANDOM'))
    }
    else if (!mentionedMember) {
        return message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Error 403', message.author.avatarURL())
            .setDescription('**➥** You need to mention a member you want to unwarn.')
            .setTimestamp(message.createdAt)
            .setColor('RANDOM'))
    }

    const mentionedPotision = mentionedMember.roles.highest.position
    const memberPotision = message.member.roles.highest.position

    if (memberPotision <= mentionedPotision) {
        return message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Error 403', message.author.avatarURL())
            .setDescription('**➥** You can\'t unwarn this member as there role is higher to yours.')
            .setTimestamp(message.createdAt)
            .setColor('RANDOM'))
    }

    const reason = args.slice(2).join(' ') || 'Not Specified'

    const warnDoc = await warnModel.findOne({
        guildID: message.guild.id,
        memberID: mentionedMember.id,
    }).catch(err => console.log(err))

    if (!warnDoc || !warnDoc.warnings.length) {
        return message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Error 403', message.author.avatarURL())
            .setDescription('**➥** This member dosn\'t have any warnings.')
            .setTimestamp(message.createdAt)
            .setColor('RANDOM'))
    }

    const warningID = parseInt(args[1])

    if (warningID <= 0 || warningID > warnDoc.warnings.length) {
        return message.channel.send(new Discord.MessageEmbed()
            .setAuthor('Error 403', message.author.avatarURL())
            .setDescription('**➥** This is an invalid warning id.')
            .setTimestamp(message.createdAt)
            .setColor('RANDOM'))
    }

    warnDoc.warnings.splice(warningID - 1, warningID !== 1 ? warningID - 1 : 1)

    await warnDoc.save().catch(err => console.log(err))

    message.channel.send(new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.avatarURL())
        .addField("**Memeber**", `${mentionedMember}`)
        .addField("**Action**", "Unwarn")
        .addField("**Reason**", `${reason ? `${reason}` : ''}`)
        .setTimestamp(message.createdAt)
        .setThumbnail(mentionedMember.user.displayAvatarURL({ dynamic: true }))
        .setColor('RANDOM'))
    }
};