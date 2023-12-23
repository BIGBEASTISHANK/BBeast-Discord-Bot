const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready to say hlo!');
});

client.on('message', message => {
  if (message.content === 'hlo') {
    message.channel.send(`${message.author} wassup bro!`);
  }
});


client.login(process.env.TOKEN);