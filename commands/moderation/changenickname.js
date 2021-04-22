module.exports = {
    name: 'changenickname',
    aliases: ['nick'],
    permissions: ["MANAGE_NICKNAMES", "CHANGE_NICKNAME"],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        const target = message.mentions.users.first();

        if (target) {
            const member = message.guild.members.cache.get(target.id);
            args.shift()
            const nickname = args.join(' ')

            member.setNickname(nickname)

            message.channel.send({ embed: { color: `#00f2ff`, description: `${member} nickname has changed!` } })

        } else {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'Please tag the member to change nick name!' } })
        }
    }
}