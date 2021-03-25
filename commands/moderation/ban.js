module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(client, message, cmd, args, Discord) {
        if (message.member.permissions.has("BAN_MEMBERS")) {
            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send({
                    embed: { color: `#00f2ff`, description: `${memberTarget} have been banned` }
                })
            } else {
                message.channel.send({
                    embed: { color: `#00f2ff`, description: 'Please enter the name whome to Ban' }
                })
            }
        } else {
            message.channel.send({
                embed: { color: `#00f2ff`, description: 'You are missing the `BAN MEMBER` permission' }
            })
        }
    }
}