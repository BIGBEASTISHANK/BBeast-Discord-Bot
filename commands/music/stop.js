const { MessageEmbed } = require('discord.js')
const { success, error } = require('../../owner.json')

module.exports = {
    name: 'stop',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
    if(!message.guild.me.voice.channel) return message.channel.send(` I'm not in voice channel`)
    await client.player.stop(message);
    message.channel.send(` Stopped Playing`)
  }
}