const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'disconnect',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
    const channel = message.member.voice.channel;
    if (!channel)
    return message.channel.send(
      "You must Join a voice channel before using this command!"
    );

    await channel.leave();

    return message.channel.send(
    new MessageEmbed()
      .setDescription("**Left the voice channel :white_check_mark: **")
      .setColor("RANDOM")
    );
    }
};
