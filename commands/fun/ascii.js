const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    aliases: ['help ascii'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord){

        if (!args[0]) return message.channel.send({ embed: { color: `#00f2ff`, description: 'Please provide some text' } });

        msg = args.join(" ");

        figlet.text(msg, function (err, data) {
            if (err) {
                console.log('Something went wrong');
                console.dir(err);
            }
            if (data.length > 2000) return message.channel.send({ embed: { color: `#00f2ff`, description: 'Please provide text shorter than 2000 characters' } })

            message.channel.send({ embed: { color: `#00f2ff`, description: '```' + data + '```' } })
        })

    }
}