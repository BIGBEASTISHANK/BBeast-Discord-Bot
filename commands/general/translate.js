const translate = require("@iamtraction/google-translate");
const Discord = require('discord.js');

module.exports = {
  name: 'translate',
  aliases: ['trans'],
  permissions: [],
  cooldown: 0,
  async execute(client, message, cmd, args, Discord) {
    const query = args.join(" ");
    if (!query) return message.channel.send({ embed: { color: `#00f2ff`, description: "Please specify a text to translate" } });

    const translated = await translate(query, { to: 'en' });
    message.channel.send({ embed: { color: `#00f2ff`, description: `${translated.text}` } });

  }
};