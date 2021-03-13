const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'help',
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00f2ff')
        .setTitle('Help')
        .setDescription('`-` Is Prefix')
        .addFields(
            {name: 'Get Link', value: '`youtube` | `website` | `github`'},
            {name: 'Moderation', value: '`clear` | `Kick` | `Ban` | `Mute` | `Unmute`'},
            {name: 'Music', value: '`play` | `stop` | `queue` | `skip`'},
            {name: 'Utility', value: '`ping` | `join` | `invite` | `suggestions`'},
            {name: 'Fun', value: '`meme` | `calculator` | `image`'}
        )
        .setFooter('More Command soon')
        message.channel.send(newEmbed);
 }
}