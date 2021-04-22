module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        const target = message.mentions.users.first
        const reason = args.join(' ');

        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send({
                embed: { color: `#00f2ff`, description: `${memberTarget} have been kicked! Reasen: *****${reason}*****` }
            })

            const image = message.guild.iconURL({ dynamic: true })
            const userID = message.mentions.users.first()
            const personkicked = client.users.cache.get(userID.id)
            const kickeduser = new Discord.MessageEmbed()
                .setColor('#00f2ff')
                .setTitle('New Warning!')
                .addField('Author', message.author.toString(), true)
                .addField('Guild', message.guild.name, true)
                .addField('Reason', reason)
                .setThumbnail(image)
                .setTimestamp();

            personkicked.send(kickeduser);
        } else {
            message.channel.send({
                embed: { color: `#00f2ff`, description: 'Please enter the name whome to kick' }
            })
        }
    }
}