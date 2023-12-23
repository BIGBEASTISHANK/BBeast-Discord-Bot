module.exports = {
    name: 'eval',
    aliases: ['e'],
    permissions: [],
    cooldown: 0,
    execute(client, message, cmd, args, Discord) {

        require('dotenv').config();
        const prefix = process.env.PREFIX;
        const { content } = message
        const text = content
        const split = text.split(' ')
        const toconfess = args.join(' ')
        const { member } = message

        if (member.id === '487196022578085892') {
            if (split.length < 2) {
                message.channel.send({ embed: { color: `RANDOM`, description: 'Plese give a command my Boss :wink: !' } })
                return;
            }
        } else {
            return
        }

        if (cmd === 'eval') {
            const ownerId = '487196022578085892'
            const { member, channel, content } = message

            if (member.id === ownerId) {
                const result = eval(content.replace(`${prefix}eval `, ''))
                channel.send(result)
            }
        }
        if (cmd === 'e') {
            const ownerId = '487196022578085892'
            const { member, channel, content } = message

            if (member.id === ownerId) {
                const result = eval(content.replace(`${prefix}e `, ''))
                channel.send(result)
            }
        }
    }
}