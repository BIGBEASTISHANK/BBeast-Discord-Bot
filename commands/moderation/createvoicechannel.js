module.exports = {
    name: 'createvoicechannel',
    aliases: ['cvc'],
    permissions: ["MANAGE_CHANNELS"],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        if (cmd === 'createvoicechannel') {
            const name = message.content.replace('-createvoicechannel ', '')

            message.guild.channels
                .create(name, {
                    type: 'voice',
                })
                .then((channel) => {
                    const categoryId = message.channel.parentID
                    channel.setParent(categoryId)
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
                    message.channel.send({ embed: { color: `#00f2ff`, description: `Voice Channel **${name}** have been created!` } })
                })
        }
    }
}