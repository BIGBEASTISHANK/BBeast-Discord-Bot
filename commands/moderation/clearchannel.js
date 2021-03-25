module.exports = {
    name: 'clearchannel',
    aliases: ['cc', 'nuke'],
    permissions: [],
    execute(client, message, cmd, args, discord) {
        if (message.member.hasPermission('MANAGE_CHANNELS')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        } else {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'You are missing `MANAGE CHANNELS` permission'}})
        }
    }
}