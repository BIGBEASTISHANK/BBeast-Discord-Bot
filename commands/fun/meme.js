const fetch = require('node-fetch');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'meme',
    async execute(client, message, cmd, args, Discord) {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send({
                    embed: { color: `#00f2ff`, description: 'Happy now :)' }
                })
                const memeEmbed = new MessageEmbed()
                    .setColor('#00f2ff')
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setDescription(`Link:${json.postLink} | Subreddit:: ${json.subreddit}`);
                message.channel.send(memeEmbed);

            });
    }
}