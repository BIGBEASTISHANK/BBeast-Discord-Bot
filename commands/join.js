const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'join',
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00f2ff')
        .setTitle('Come I will give you support :)')
        .setDescription('Check the link blow')
        .addFields(
            {name: 'Link:', value: 'https://discord.gg/W9nmeZ2Bse'},
        )
        .setImage('https://pbs.twimg.com/media/DiPPB5vVQAAzPUP?format=jpg&name=large')
        message.channel.send(newEmbed);
 }
}