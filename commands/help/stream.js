const Discord = require('discord.js');
const ytdl = require("ytdl-core");
const client = new Discord.Client()

module.exports = {
    name: 'stream',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
  const voice_channel = message.member.voice.channel;
  if (!voice_channel)
    return message.reply("**You have to be in a voice channel**");
  const permissions = voice_channel.permissionsFor(client.user);
  if (!permissions.has("SPEAK"))
    return message.reply("I don't Have the required permissions");
  if (!permissions.has("CONNECT"))
    return message.reply("I don't Have the required permissions");
  const connection = await voice_channel.join();
  const link = args[0];
  const valid = ytdl.validateURL(link);
  if (valid) {
    const vid_info = await ytdl.getInfo(link);
    const vid_title = vid_info.videoDetails.title;
    const vid_url = vid_info.videoDetails.video_url;
    const stream = await ytdl(vid_url);
    connection.play(stream);
    message.reply(`** Now streaming ${vid_title} **`);
  } else {
    return message.reply(" **The Argument is not a valid link**");
  }

    }
};