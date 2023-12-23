const { success, error } = require('../../owner.json')

module.exports = {
    name: 'queue',
    aliases: ['q'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
    if(!message.guild.me.voice.channel) return message.channel.send(` I must be in voice channel first`)
    let queue = client.player.getQueue(message);
    message.channel.send("\`\`\`" + queue.songs.map((song, id) =>
      `${id + 1} | ${song.name} - ${song.formattedDuration}`
    ).join("\n") + "\`\`\`").catch(err => {
      message.channel.send(` There is no song in queue`)
    })
  }
}