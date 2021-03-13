const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'invite',
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00f2ff')
        .setTitle('Take on trip of your server!')
        .setDescription('Check the link blow')
        .addFields(
            {name: 'Link:', value: 'https://discord.com/oauth2/authorize?client_id=709984874924081174&scope=bot&permissions=8'},
        )
        .setImage('https://discord.com/assets/ee7c382d9257652a88c8f7b7f22a994d.png')
        message.channel.send(newEmbed);
 }
}