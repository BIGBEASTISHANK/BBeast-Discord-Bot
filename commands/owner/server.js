module.exports = {
    name: 'server',
    aliases: ['ser', 'si'],
    permissions: [],
    execute(client, message, cmd, args, discord) {

        const ownerId = '599883476522631178'
        const { member} = message

        if (member.id === ownerId) {
            client.guilds.cache.forEach((guild) => {
                message.channel.send({ embed: { color: `#00f2ff`, description: `[${guild.name}] has a total of [${guild.memberCount}] members.` } })
            })
        } else {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'You think you are the owner 😡, Why should I give you the info!' } })
        }
    }
}