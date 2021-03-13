const ms = require('ms');
module.exports = {
    name: 'mute',
    execute(client, message, cmd, args, Discord) {
        const target = message.mentions.users.first();
        if (message.member.permissions.has("KICK_MEMBERS")) {
            if (target) {

                let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send({ embed: { color: `#00f2ff`, description: `<@${memberTarget.user.id}> has been muted` } });
                    return
                }
                memberTarget.roles.add(muteRole.id);
                message.channel.send({ embed: { color: `#00f2ff`, description: `<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}` } });

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send({ embed: { color: `#00f2ff`, description: 'Cant find that member!' } });
            }
        }
        else {
            message.channel.send({
                embed: { color: `#00f2ff`, description: `You DonT have permission to Mute` }
            })
        }
    }
}