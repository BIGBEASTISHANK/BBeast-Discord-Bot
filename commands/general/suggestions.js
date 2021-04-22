module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion', 'sug'],
    permissions: [],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        const { content } = message
        const text = content
        const split = text.split(' ')
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');

        if (!channel) return message.channel.send({ embed: { color: `#00f2ff`, description: '`suggestions` channel does not exist! Please make a channel named `suggestions` exactly.' } });

        if (split.length < 2) {
            message.channel.send({ embed: { color: `#00f2ff`, description: 'Please give the message to suggest!' } })
            return
        }

        const messageArgs = args.join(' ');

        const embed = new Discord.MessageEmbed()

            .setColor('00f2ff')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs);

        channel.send(embed).then((msg) => {
            msg.react('✅');
            msg.react('❎');
            message.delete();
        })
    }
}