module.exports = {
    name: 'voicekick',
    aliases: [''],
    permissions: ["MANAGE_ROLES"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

      if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
      return message.channel.send(
        "I Don't Have Proper Permissions To Use This Command!"
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Please Mention User That You Want To Kick From Voice Channel!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`User Is Not In Any Voice Channel!`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`User Has Been Kicked From Voice Channel!`)
  }
};