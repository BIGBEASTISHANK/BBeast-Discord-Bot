module.exports = {
    name: 'clearchannel',
    aliases: ['cc'],
    permissions: [],
    execute(client, message, cmd, args, discord) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        } else {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'You are missing `MANAGE MASSAGES` permission'}})
        }
    }
}