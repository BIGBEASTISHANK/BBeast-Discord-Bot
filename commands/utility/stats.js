
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'serverinfo',
    aliases: ['stats'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
        const members = message.guild.members.cache;
        const banned = await message.guild.fetchBans();
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setTitle('Server Statistics')
        .addField('Owner', `\`${message.guild.ownerID}\``)
        .addField('Id', `\`${message.guild.id}\``)
        .addField('Created', `\`${message.guild.createdAt}\``)
        .addField('Membercount', `Total: \`${message.guild.memberCount}\`\nOnline: \`${members.filter(m => m.presence.status === 'online').size}\`\nIdle: \`${members.filter(m => m.presence.status === 'idle').size}\`\nDND: \`${members.filter(m => m.presence.status === 'dnd').size}\`\nInvisible: \`${members.filter(m => m.presence.status === 'offline').size}\``)
        .addField('Roles', `\`${message.guild.roles.cache.size}\``)
        .addField('Emoji', `\`${message.guild.emojis.cache.size}\``)
        .addField('Region', `\`${message.guild.region}\``)
        .addField('Boost', `\`${message.guild.premiumSubscriptionCount}\``)
        .addField('Ban Count', `\`${banned.size}\``)
        .addField('Verification Level', `\`${message.guild.verificationLevel}\``)
        .addField('Channels', `Text: \`${message.guild.channels.cache.filter(ch => ch.type === 'text').size}\`\nVoice: \`${message.guild.channels.cache.filter(ch => ch.type === 'voice').size}\``)
        .setFooter('For support server Do d!supinv', message.author.displayAvatarURL({ dynamic:  true }))
        message.channel.send(embed)
    }


}