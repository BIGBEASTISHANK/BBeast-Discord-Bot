const Discord = require("discord.js");

module.exports = {
    name: 'connect4',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

          const embed = new Discord.MessageEmbed()
      .setAuthor(
        "Please mention a user to play against.",
        message.author.displayAvatarURL()
      )
      .setColor("#ffb6c1");

    const Connect4 = require("./four.js");
    const connect4 = new Connect4(client);

    if (!message.mentions.users.first()) return message.channel.send(embed);

    connect4.newGame(message);

    }
};