const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'wallpaper',
    aliases: ['paper'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

      const embed = new discord.MessageEmbed()  
    embed.setImage(await akaneko.wallpapers());
    embed.setColor("RANDOM")
    return message.channel.send(embed);

    }
};