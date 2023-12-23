module.exports = {
    name: 'slowmode',
    aliases: ['slm'],
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
};