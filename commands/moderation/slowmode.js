module.exports = {
    name: 'slowmode',
    aliases: ['slm'],
<<<<<<< HEAD
    permissions: ["MANAGE_CHANNELS"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        const author = message.author;

        if (!args[0])
            return message.channel.send({ embed: { color: `#00f2ff`, description: `You did not specify the time in seconds you wish to set this channel's slow mode too!` } });

        if (isNaN(args[0])) return message.channel.send({ embed: { color: `#00f2ff`, description: `That is not a numbr!` } });

        message.channel.setRateLimitPerUser(args[0]);
        message.channel.send({ embed: { color: `#00f2ff`, description: `${author} You set the slow mode to this channel for **${args[0]} seconds**` } });
    },
=======
    permissions: ["MANAGE_GUILD"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

          if (!args[0])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
      );
      
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    
    message.channel.setRateLimitPerUser(args[0]);
    message.channel.send(
      `Set the slowmode of this channel too **${args[0]}**`
    );
  },
>>>>>>> jsmerge
};