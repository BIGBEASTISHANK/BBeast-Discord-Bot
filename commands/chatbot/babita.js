const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
require('discord-inline-replys');

client.on('ready', () => {
  console.log('babita is ready');
});

client.on("message", async message => {
  const chatbotSchema = require("../../models/set-chatBot")
  await chatbotSchema.findOne({ guild: message.guild.id }, async (err, data) => {
   if(!data) return;
  if(err) throw err
   const channell = data.channel
 if (message.author.bot || message.channel.type === 'dm') return;

if(message.channel.id === channell) {
    fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=AaiFwTiVPGn3ADIfOsbVuDHTd`)
    .then(response => response.json())
    .then(data => {
        message.noMentionReply(data.response)
    })
}
});

});

client.login(process.env.TOKEN);