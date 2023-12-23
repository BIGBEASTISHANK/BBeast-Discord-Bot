const { client, Message, MessageAttachment } = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
    name: 'bed',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
      const user = message.mentions.users.first();
      if (!user) return message.reply("Please mention a user!");

      const avatar = user.displayAvatarURL({ format: 'png' });

      const image = await Canvas.bed(message.author.displayAvatarURL({ format: 'png' }), avatar);

      message.channel.send(new MessageAttachment(image, "image.gif"));

    }
};