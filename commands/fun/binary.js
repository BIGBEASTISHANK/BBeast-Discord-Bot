const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const axios = require('axios');

module.exports = {
    name: 'binary',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

    const url = `http://some-random-api.ml/binary?text=${args}`;

  let response, data;
  try {
    response = await axios.get(url);
    data = response.data;
  } catch (e) {
    return message.channel.send(`please give text to convert!`);
  }

  const embed = new MessageEmbed()
    .setTitle("Text to Binary")
    .setThumbnail(
      "https://png.pngtree.com/png-clipart/20200225/original/pngtree-binary-code-and-magnifying-glass-isometric-icon-png-image_5252004.jpg"
    )

    .setDescription("**Binary Code** - `" + data.binary + "`")
    .setTimestamp()
    .setColor('RANDOM');

  await message.channel.send(embed);

    }
};