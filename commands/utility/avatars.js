const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    aliases: ['av'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
    //Start

    let Member = message.mentions.users.first() || message.guild.member(args[0]) || message.author;

    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .addField(
        "Links",
        `[Png](${Member.displayAvatarURL({
          format: "png",
          dynamic: true
        })}) | [Jpg](${Member.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}) | [Webp](${Member.displayAvatarURL({
          format: "webp",
          dynamic: true
        })})`
      )
      .setImage(Member.displayAvatarURL({size: 2048, dynamic: true}))
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};