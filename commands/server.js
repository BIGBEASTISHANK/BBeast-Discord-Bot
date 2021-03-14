module.exports = {
    name: 'server',
    aliases: ['ser'],
    permissions: [],
    execute(client, message, cmd, args, discord){
        client.guilds.cache.forEach((guild) => {
            message.channel.send({ embed: { color: `#00f2ff`, description: `[${guild.name}] has a total of [${guild.memberCount}] members.` }})
        })
    }
}