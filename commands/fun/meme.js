const fetch = require('node-fetch');

module.exports = {
    name: 'meme',
    aliases: [],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send({
                    embed: { color: `#00f2ff`, description: 'Happy now :)' }
                })
                const memeEmbed = new Discord.MessageEmbed()
                    .setColor('#00f2ff')
                    .setTitle(`${json.title}`)
                    .setImage(json.url)
                    .setURL(json.postLink)
                message.channel.send(memeEmbed);

            });
    }
}