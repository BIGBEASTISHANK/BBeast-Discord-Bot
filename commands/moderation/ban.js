module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        const target = message.mentions.users.first();
        const reason = args.join(' ')

        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send({ embed: { color: `#00f2ff`, description: `${memberTarget} have been banned! Reason: *****${reason}*****` } })

            const image = message.guild.iconURL({ dynamic: true })
            const userID = message.mentions.users.first()
            const personbaned = client.users.cache.get(userID.id)
            const baned = new Discord.MessageEmbed()
                .setColor('#00f2ff')
                .setTitle('You have been Banned!')
                .addField('By', message.author.toString(), true)
                .addField('Server', message.guild.name, true)
                .addField('Reason', reason)
                .setThumbnail(image)
                .setTimestamp();

            personbaned.send(baned);
        } else {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'Please enter the name whome to Ban' } })
        }
    }
}