const { tictactoe } = require('reconlx')

module.exports = {
    name: "tictactoe",
    aliases: ['ttt'],
    permissions: [],
    cooldown: 0,

    async execute(client, message, cmd, args, Discord) {
        const member = message.mentions.members.first()
        if (!member) return message.channel.send({ embed: { color: `#00f2ff`, description: 'Please specify a user to play against!' } });

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}