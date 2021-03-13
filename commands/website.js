const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'website',
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00f2ff')
        .setTitle('Check My youtube Channel')
        .setDescription('Check the link blow')
        .addFields(
            {name: 'Link:', value: 'http://bigbeastishank.github.io'},
        )
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTra3hfUjupFkyyBKiUw80_vtHhWUjNKMo6Sw&usqp=CAU')
        message.channel.send(newEmbed);
 }
}