const { success, error } = require('../../owner.json')

module.exports = {
    name: 'skip',
    aliases: ['s'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
    if(!message.member.voice.channel) return message.channel.send(` You must be in voice channel first`)
    if(!message.guild.me.voice.channel) return message.channel.send(` I must be in voice channel`)
    if(message.guild.me.voice.channel) {
      if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(` You must be in my voice channel`)
    }
    client.player.skip(message);
    message.channel.send(` Skipped current song`)
  }
}