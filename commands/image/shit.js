const { client, Message, MessageAttachment } = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
    name: 'shit',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
      const user = message.mentions.users.first() || message.author;

      const avatar = user.displayAvatarURL({ format: 'png' });

      const image = await Canvas.shit(avatar);

      message.channel.send(new MessageAttachment(image, "image.gif"));

    }
};