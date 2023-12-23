const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "report",
  category: "moderation",
  description: "Report a user of your choice!",
  usage: "<User mention>",
  async execute(client, message, args){
    let User = message.mentions.users.first();

    if (!User) {
      return message.channel.send({
        embed: { color: '#DC143C', description: 'You did not mention the culprit!' }
      });
    } else {
       let Reason = args.slice(1).join(" ");
      if (!Reason) {
        return message.channel.send();
      }
      let Avatar = User.displayAvatarURL();
      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "staff-chat"
      );
      let Embed = new MessageEmbed()
        .setTitle(`A person has been reported!`)
        .setDescription(
          `\`${message.author.tag}\` has reported the user \`${User.tag}\`! `
        )
        .setColor('#DC143C')
        .setThumbnail(Avatar)
        .addFields(
          { name: "Mod ID", value: `${message.author.id}`, inline: true },
          { name: "Mod Tag", value: `${message.author.tag}`, inline: true },
          { name: "Reported ID", value: `${User.id}`, inline: true },
          { name: "Reported Tag", value: `${User.tag}`, inline: true },
          { name: "Reason", value: `\`${Reason.slice()}\``, inline: true },
          {
            name: "Date (M/D/Y)",
            value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
            inline: true,
          }
        );
      Channel.send(Embed);
    }
  },
};