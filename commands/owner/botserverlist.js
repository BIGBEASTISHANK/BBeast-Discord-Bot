module.exports = {
    name: 'botserverlist',
    aliases: ['bsl'],
    permissions: [],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        const ownerId = '599883476522631178'
        const { member } = message

        if (member.id === ownerId) {
            client.guilds.cache.forEach((guild) => {
                const bsl = new Discord.MessageEmbed()
                    .setColor('#00f2ff')
                    .setThumbnail(guild.iconURL())
                    .setTitle('Total Number of servers!')
                    .addField('Name:', `**${guild.name}**`, true)
                    .addField('Members:', `**${guild.memberCount}**`, true)
                    .setTimestamp();
                message.channel.send(bsl)
            })
        } else {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'You think you are the owner of this bot 😡, Why should I give you the info!' } })
        }
    }
}