const lyricsFinder = require('lyrics-finder');

module.exports = {
    name: 'lyrics',
    aliases: ['lyr'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        if (!args[0]) return message.channel.send(`Specify a song`)

        try {
            const title = args.join(" ")

            let lyrics = await lyricsFinder(title) || `Not found`;

            await message.channel.send(`${lyrics}`, {
                split: true
            });
        } catch (e) {
            message.reply(`${e}`)
        }
    }
};