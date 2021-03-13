const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'unmute',
    execute(client, message, cmd, args, Discord) {
        const target = message.mentions.users.first();
        if (message.member.permissions.has("KICK_MEMBERS")) {
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                message.channel.send({ embed: { color: `#00f2ff`, description: `<@${memberTarget.user.id}> has been unmuted` } });
            } else {
                message.channel.send({ embed: { color: `#00f2ff`, description: 'Cant find that member!' } });
            }
        } else {
            message.channel.send({
                embed: { color: `#00f2ff`, description: `You DonT have permission to Unmute` }
            })
        }
    }
}