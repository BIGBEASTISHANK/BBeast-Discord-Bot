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
<<<<<<< HEAD
            message.channel.send({ embed: { color: `#00f2ff`, description: `${memberTarget} have been banned! Reason: *****${reason}*****` } })
=======
            message.channel.send({ embed: { color: `RANDOM`, description: `${memberTarget} have been banned! Reason: *****${reason}*****` } })
>>>>>>> jsmerge

            const image = message.guild.iconURL({ dynamic: true })
            const userID = message.mentions.users.first()
            const personbaned = client.users.cache.get(userID.id)
            const baned = new Discord.MessageEmbed()
<<<<<<< HEAD
                .setColor('#00f2ff')
=======
                .setColor('RANDOM')
>>>>>>> jsmerge
                .setTitle('You have been Banned!')
                .addField('By', message.author.toString(), true)
                .addField('Server', message.guild.name, true)
                .addField('Reason', reason)
                .setThumbnail(image)
                .setTimestamp();

            personbaned.send(baned);
        } else {
<<<<<<< HEAD
            message.channel.send({ embed: { color: `#00f2ff`, description: 'Please enter the name whome to Ban' } })
=======
            message.channel.send({ embed: { color: `RANDOM`, description: 'Please enter the name whome to Ban' } })
>>>>>>> jsmerge
        }
    }
}