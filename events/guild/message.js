require('dotenv').config();
module.exports = (Discord, client, message) => {
  const prefix = process.env.PREFIX;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const cmd = args.shift().toLowerCase();

  const command = client.command.get(cmd) || client.command.find(a => a.aliases && a.aliases.includes(cmd));

  try {
    if (command) command.execute(client, message, cmd, args, Discord);
  } catch (error) {
    console.error(error);
    message.channel.send({ embed: { color: `#00f2ff`, description: "There was an error executing that command." } }).catch(console.error);
  }

}