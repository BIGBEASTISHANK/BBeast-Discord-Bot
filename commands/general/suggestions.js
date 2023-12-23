module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion', 'sug'],
    permissions: [],
    execute(client, message, cmd, args, discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send({ embed: { color: `RANDOM`, description: '`suggestions` channel does not exist!'}});

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('✅');
            msg.react('❎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}