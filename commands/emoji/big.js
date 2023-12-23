module.exports = {
    name: 'emoji-big',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

    const discord = require("discord.js");
    if (!args[0]) return message.channel.send("emote is a required argument that is missing.");
    const emo = discord.Util.parseEmoji(args[0]);
    if (!emo.name || !emo.id) return message.channel.send("Invalid emote argument");
    const res = `${emo.name}: https://cdn.discordapp.com/emojis/${emo.id}.${emo.animated ? "gif" : "png"}`;
    message.channel.send(res);

    }
};