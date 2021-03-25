module.exports = {
    name: 'changenickname',
    aliases: ['nick'],
    execute(client, message, cmd, args, Discord) {
        if (message.member.permissions.has("MANAGE_NICKNAMES")) {
            const target = message.mentions.users.first();

            if (target) {
                const member = message.guild.members.cache.get(target.id);
                args.shift()
                const nickname = args.join(' ')

                member.setNickname(nickname)

                message.channel.send({ embed: { color: `#00f2ff`, description: `${member} nickname has changed!` } })

            } else {
                message.channel.send({
                    embed: { color: `#00f2ff`, description: 'Please tag the member to change nick name!' }
                })
            }
        } else {
            message.channel.send({
                embed: { color: `#00f2ff`, description: 'You are missing the `MANAGE NICKNAME` permission' }
            })
        }
    }
}