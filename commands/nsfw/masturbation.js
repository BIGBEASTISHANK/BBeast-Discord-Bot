const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'masturbation',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

      if(!message.channel.nsfw) {
      return message.reply("This channel dosen't support nsfw content")
      
    } else {
    const embed = new discord.MessageEmbed()

    embed.setImage(await akaneko.nsfw.masturbation());
    embed.setColor("RANDOM")
    return message.channel.send(embed);
      
    }
  }
}