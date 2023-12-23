const discord = require("discord.js")

module.exports = {
    name: 'servericon',
    aliases: ['svicon'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

    let embed = new discord.MessageEmbed()
    
      embed.setDescription(`[Download](${message.guild.iconURL({ dynamic: true, size: 2048 })})`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 2048 }))
      embed.setColor("RANDOM")
    
      message.channel.send(embed)
    
  }
}      