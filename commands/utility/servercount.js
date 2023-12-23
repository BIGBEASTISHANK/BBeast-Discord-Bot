module.exports = {
    name: 'wherebot',
    aliases: ['bot',],
    permissions: [],
    cooldown: 0,
    execute(client, message, cmd, args, discord){
        client.guilds.cache.forEach((guild) => {
            message.channel.send({ embed: { color: `RANDOM`, description: `[${guild.name}] has a total of [${guild.memberCount}] members.` }})
        })
    }
}