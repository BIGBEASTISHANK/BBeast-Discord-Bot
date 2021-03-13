const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = {
    name: 'youtube',
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00f2ff')
        .setTitle('Check My youtube Channel')
        .setDescription('Check the link blow')
        .addFields(
            {name: 'Link:', value: 'https://www.youtube.com/channel/UCw6lNThNWxwz1cz5rvR1Rdw'},
        )
        .setImage('https://yt3.ggpht.com/ytc/AAUvwnhoa6mtolayckiRaKakvtvz2mPic6C-0mMKoGfO4A=s900-c-k-c0x00ffffff-no-rj')
        message.channel.send(newEmbed);
 }
}