const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'play',
    aliases: ['p'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
    if(!message.member.voice.channel) return message.channel.send(` You must be in voice channel first`)
    if(message.guild.me.voice.channel) {
      if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(` You must be in my voice channel`)
    }
    const query = args.join(" ")
    if(!query) return message.channel.send(` You must provide Song Title/URL`);
    await client.player.play(message, query)
  }
}