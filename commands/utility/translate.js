const translate = require("@iamtraction/google-translate");
const Discord = require('discord.js');

module.exports = {
    name: 'translate',
    aliases: ['trans'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
    let language = args[0];
    if (!language) {
      return message.channel.send(
        ":x: - Please enter a **language code**! Example `fr` / `de` / `en` etc"
      );
    }

    const query = args.slice(1).join(" ");
    if (!query) {
      return message.channel.send(
        `:x: - Please enter a **text to translate**! Example: \`d! translate fr hello world\``
      );
    }

    const translated = await translate(query, { to: `${language}` });

    const translateEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag)
      .addFields(
        { name: `Input`, value: `\`\`\`${query}\`\`\`` },
        { name: `Output`, value: `\`\`\`${translated.text}\`\`\`` }
      )
      .setColor("RANDOM")
      .setTimestamp();
    message.channel.send(translateEmbed);

    }
};