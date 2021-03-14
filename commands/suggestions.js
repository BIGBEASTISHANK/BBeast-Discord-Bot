module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion', 'sug'],
    permissions: [],
    execute(client, message, cmd, args, discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send({ embed: { color: `#00f2ff`, description: '`suggestions` channel does not exist!'}});

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
        .setColor('00f2ff')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}