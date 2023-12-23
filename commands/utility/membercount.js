const discord = require("discord.js");

module.exports = {
    name: 'membercount',
    aliases: ['memcount'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

    let embed = new discord.MessageEmbed()
    .setDescription(
    `
Total Members - ${message.guild.memberCount}
Humans - ${message.guild.members.cache.filter(m => !m.user.bot).size}
Bots - ${message.guild.members.cache.filter(m => m.user.bot).size}`)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
  }
}