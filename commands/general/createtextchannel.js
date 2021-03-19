module.exports = {
    name: 'createtextchannel',
    aliases: ['ctc'],
    execute(client, message, cmd, args, discord) {
        if (cmd === 'createtextchannel') {
            const name = message.content.replace('-createtextchannel', '')

            message.guild.channels
                .create(name, {
                    type: 'text',
                })
                .then((channel) => {
                    const categoryId = message.channel.parentID
                    channel.setParent(categoryId)
                    message.channel.send({ embed: { color: `#00f2ff`, description: `Text Channel **${name}** have been created!` } })
                })
        } else if(cmd === 'ctc'){
            const name = message.content.replace('-ctc', '')

            message.guild.channels
                .create(name, {
                    type: 'text',
                })
                .then((channel) => {
                    const categoryId = message.channel.parentID
                    channel.setParent(categoryId)
                    message.channel.send({ embed: { color: `#00f2ff`, description: `Text Channel **${name}** have been created!` } })
                })
        }
    }
}