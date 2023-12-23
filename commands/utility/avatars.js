<<<<<<< HEAD
module.exports = {
    name: 'avatar',
    aliases: ['ava', 'av'],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        let user = message.mentions.users.first() || message.author;

        let embed = new Discord.MessageEmbed()
            .setTitle(`${user.username}'s Avatar!`)
            .setImage(user.avatarURL({ size: 2048, dynamic: true }))
            .setColor('#00f2ff');
        message.channel.send(embed);

    }
=======
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
>>>>>>> jsmerge
};