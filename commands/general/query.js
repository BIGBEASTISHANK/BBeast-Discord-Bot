module.exports = {
    name: `bugreport`,
    aliases: ['bug', 'report'],
    permissions: [],
    cooldown: 10,
    async execute(client, message, cmd, args, Discord) {
  
      const { guild } = message;
      const blockeduser = []
      const owner = client.users.cache.get('599883476522631178')
      const query = args.slice(0).join(' ');
      const userID = message.author.id
      const author = message.author
      const image = message.guild.iconURL({ dynamic: true })
  
  
      if (null) {
        message.channel.send({ embed: { color: `#00f2ff`, description: 'You have **abused** this feature before and as such have been put on a **blacklist**!' } })
      } else {
  
        if (!query) {
          message.channel.send({ embed: { color: `#00f2ff`, description: 'You are attempting to send a bug report **without listing** a bug! And If you gave **something else** accept bugs then you will **banned** by using this **command** and in some case using **bot**.' } })
        } else {
          const reportembed = new Discord.MessageEmbed()
            .setColor('#00f2ff')
            .setTitle('New Bug Found!')
            .addField('Author', message.author.toString(), true)
            .addField('Guild', message.guild.name, true)
            .addField('Report', query)
            .setThumbnail(image)
            .setTimestamp();
  
          owner.send(reportembed);
  
          await message.channel.send({ embed: { color: `#00f2ff`, description: `Thank you ${author} for **reporting** the **bug**! You will get a **DM** from ${owner} when the issue is **reolved**. 😊` } })
  
        };
      };
  
    }
  }