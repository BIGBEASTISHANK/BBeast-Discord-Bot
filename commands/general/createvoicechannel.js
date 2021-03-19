module.exports = {
    name: 'createvoicechannel',
    aliases: ['cvc'],
    execute(client, message, cmd, args, discord) {
        if (cmd === 'createvoicechannel') {
            const name = message.content.replace('-createvoicechannel ', '')

            message.guild.channels
                .create(name, {
                    type: 'voice',
                })
                .then((channel) => {
                    const categoryId = message.channel.parentID
                    channel.setParent(categoryId)
                    channel.setUserLimit(10)
                    message.channel.send({ embed: { color: `#00f2ff`, description: `Voice Channel **${name}** have been created!` } })
                })
        } else if (cmd === 'cvc') {
            const name = message.content.replace('-cvc ', '')

            message.guild.channels
                .create(name, {
                    type: 'voice',
                })
                .then((channel) => {
                    const categoryId = message.channel.parentID
                    channel.setParent(categoryId)
                    channel.setUserLimit(10)
                    message.channel.send({ embed: { color: `#00f2ff`, description: `Voice Channel **${name}** have been created!` } })
                })
        }
    }
}