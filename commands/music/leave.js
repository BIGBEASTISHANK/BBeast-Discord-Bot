const { success, error } = require('../../owner.json')

module.exports = {
    name: 'leave',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
    if(!message.member.voice.channel) return message.channel.send(` You must be in voice channel first`)
    if(message.guild.me.voice.channel) {
      if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(` You must be in my voice channel`)
    }
    await message.guild.me.voice.channel.leave()
    message.channel.send(` Left voice channel`)
  }
}