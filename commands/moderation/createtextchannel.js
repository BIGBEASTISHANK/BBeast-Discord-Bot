module.exports = {
    name: 'createtextchannel',
    aliases: ['ctc'],
    permissions: ["MANAGE_CHANNELS"],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        require('dotenv').config();
        const prefix = process.env.PREFIX

        if (cmd === 'createtextchannel') {
            const name = message.content.replace(`${prefix}createtextchannel`, '')

            message.guild.channels
                .create(name, {
                    type: 'text',
                })
                .then((channel) => {
                    const categoryId = message.channel.parentID
                    channel.setParent(categoryId)
                    message.channel.send({ embed: { color: `RANDOM`, description: `Text Channel **${name}** have been created!` } })
                })
        } else if (cmd === 'ctc') {
            const name = message.content.replace(`${prefix}ctc`, '')

            message.guild.channels
                .create(name, {
                    type: 'text',
                })
                .then((channel) => {
                    const categoryId = message.channel.parentID
                    channel.setParent(categoryId)
                    message.channel.send({ embed: { color: `RANDOM`, description: `Text Channel **${name}** have been created!` } })
                })
        }
    }
}