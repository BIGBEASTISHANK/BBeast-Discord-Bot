const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'github',
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00f2ff')
        .setTitle('My Git hub profile')
        .setDescription('Check the link blow')
        .addFields(
            {name: 'Link:', value: 'https://github.com/BIGBEASTISHANK'},
        )
        .setImage('https://miro.medium.com/max/700/1*WaaXnUvhvrswhBJSw4YTuQ.png')
        message.channel.send(newEmbed);
 }
}