const lyricsFinder = require('lyrics-finder');

module.exports = {
    name: 'lyrics',
    aliases: ['lyr'],
    permissions: ["MANAGE_ROLES"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        if (!args[0]) return message.channel.send({ embed: { color: `#00f2ff`, description: `Specify a song` } })

        const title = args.join(" ")

        let lyrics = await lyricsFinder(title) || `Not found`;

        await message.channel.send(`${lyrics}`, {
            split: true
        });
    }
};