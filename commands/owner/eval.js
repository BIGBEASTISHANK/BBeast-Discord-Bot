module.exports = {
    name: 'eval',
    aliases: ['e'],
    execute(client, message, cmd, args, Discord) {
        if (cmd === 'eval') {
            const ownerId = '599883476522631178'
            const { member, channel, content } = message

            if (member.id === ownerId) {
                const result = eval(content.replace('-eval ', ''))
                channel.send(result)
            }
        } else if (cmd === 'eval') {
            const ownerId = '501987283453607947'
            const { member, channel, content } = message

            if (member.id === ownerId) {
                const result = eval(content.replace('-eval ', ''))
                channel.send(result)
            }
        }
        if (cmd === 'e') {
            const ownerId = '599883476522631178'
            const { member, channel, content } = message

            if (member.id === ownerId) {
                const result = eval(content.replace('-e ', ''))
                channel.send(result)
            }
        } else if (cmd === 'e') {
            const ownerId = '501987283453607947'
            const { member, channel, content } = message

            if (member.id === ownerId) {
                const result = eval(content.replace('-e ', ''))
                channel.send(result)
            }
        }
    }
}