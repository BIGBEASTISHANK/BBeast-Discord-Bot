require('dotenv').config();
const cooldowns = new Map();

module.exports = (Discord, client, message) => {
  const prefix = process.env.PREFIX;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();
  const command = client.command.get(cmd) || client.command.find(a => a.aliases && a.aliases.includes(cmd));
  const author = message.author
  const userID = message.author.id
  const bu1 = ('')

  try {
    try {
      const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
      ]

      if (command.permissions.length) {
        const invalidPerms = []
        for (const perm of command.permissions) {
          if (!validPermissions.includes(perm)) {
            return
          }
          if (!message.member.hasPermission(perm)) {
            invalidPerms.push(perm);
          }
          if (!message.guild.me.hasPermission(perm)) {
            message.channel.send({ embed: { color: `#00f2ff`, description: `Bot dont have permissions! :pleading_face: Please give permissions.` } })
            return;
          }
        }
        if (invalidPerms.length) {
          return message.channel.send({ embed: { color: `#00f2ff`, description: `You are missing \`${invalidPerms}\` permission` } });
        }
      }

      if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
      }

      const current_time = Date.now();
      const time_stamps = cooldowns.get(command.name);
      const cooldown_amount = (command.cooldown) * 1000;

      if (time_stamps.has(message.author.id)) {
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;
        const author = message.author

        if (current_time < expiration_time) {
          const time_left = (expiration_time - current_time) / 1000;

          return message.channel.send({ embed: { color: `#00f2ff`, description: `${author} Please wait **${time_left.toFixed()}** more **seconds** before using \`${command.name}\` command.` } });
        }
      }

      time_stamps.set(message.author.id, current_time);
      setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    } catch (error) {
      message.channel.send({ embed: { color: `#00f2ff`, description: `${author} entered Wrong command! Bot does not have that command!` } })
    }

    if (command) {
      if (null) {
        message.channel.send({ embed: { color: `#00f2ff`, description: `You have **abused** this bot before and as such you have been put on a **blacklist**!` } })
      } else {
        command.execute(client, message, cmd, args, Discord)
      }

    }
  } catch (err) {
    console.log(err)
    message.channel.send({ embed: { color: `#00f2ff`, description: `${author} **There was an error trying to execute this command!** \n\n \`Error:\` \`\`\`js\n ${err} \`\`\`` } });
  }

}