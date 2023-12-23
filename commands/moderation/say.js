module.exports = {
    name: 'say',
    aliases: [''],
    permissions: ["ADMINISTRATOR"],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
    let MSG = message.content.split(`d!say`).join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    message.channel.send(MSG);
    message.delete();

    }
};