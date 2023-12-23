const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'nsfwwallpaper',
    aliases: ['nsfwpaper'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

      const embed = new discord.MessageEmbed()  
    embed.setImage(await akaneko.nsfw.wallpapers());
    embed.setColor("RANDOM")
    return message.channel.send(embed);

    }
};