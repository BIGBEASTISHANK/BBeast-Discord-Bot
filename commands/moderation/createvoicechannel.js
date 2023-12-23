module.exports = {
    name: 'createvoicechannel',
    aliases: ['cvc'],
    permissions: ["MANAGE_CHANNELS"],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        if (cmd === 'createvoicechannel') {
<<<<<<< HEAD
            const name = message.content.replace('-createvoicechannel ', '')
=======
            const name = message.content.replace(`d!createvoicechannel`, '')
>>>>>>> jsmerge

            message.guild.channels
                .create(name, {
                    type: 'voice',
                })
                .then((channel) => {
                    const categoryId = message.channel.parentID
                    channel.setParent(categoryId)
<<<<<<< HEAD
                    message.channel.send({ embed: { color: `#00f2ff`, description: `Voice Channel **${name}** have been created!` } })
                })
        } else if (cmd === 'cvc') {
            const name = message.content.replace('-cvc ', '')
=======
                    message.channel.send({ embed: { color: `RANDOM`, description: `Voice Channel **${name}** have been created!` } })
                })
        } else if (cmd === 'cvc') {
            const name = message.content.replace(`d!cvc`, '')
>>>>>>> jsmerge

            message.guild.channels
                .create(name, {
                    type: 'voice',
                })
                .then((channel) => {
                    const categoryId = message.channel.parentID
                    channel.setParent(categoryId)
<<<<<<< HEAD
                    message.channel.send({ embed: { color: `#00f2ff`, description: `Voice Channel **${name}** have been created!` } })
=======
                    message.channel.send({ embed: { color: `RANDOM`, description: `Voice Channel **${name}** have been created!` } })
>>>>>>> jsmerge
                })
        }
    }
}