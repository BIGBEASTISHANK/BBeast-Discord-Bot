const { MessageEmbed } = require('discord.js')
const { success, error } = require('../../owner.json')

module.exports = {
    name: 'jumpto',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
    if(!message.member.voice.channel) return message.channel.send(` You must be in voice channel first`)
    if(message.guild.me.voice.channel) {
      if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(` You must be in my voice channel`)
    }
    if(client.player.isPlaying(message) == false) return message.channel.send(` The queue is not playing`);
    if(!args[0]) return message.channel.send(` You need to provide song number`)
    if(!Number(args[0])) return message.channel.send(`You need to provide correct song number`)
    client.player.jump(message, parseInt(args[0]) - 1)
    message.channel.send(` Jumped to Song: \`${args[0]}\``)
  }
}