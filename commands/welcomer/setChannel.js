const { Client, Message, MessageEmbed } = require('discord.js');
const Schema = require('../../models/welcomeChannel');
  
module.exports = {
    name: 'set-channel',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You do not have permission to use this command');

       const channel = message.mentions.channels.first();
       if(!channel) return message.reply('Please tell me a welcome channel!');

       Schema.findOne({ Guild: message.guild.id}, async(err, data) => {
           if(data){
               data.Channel = channel.id;
               data.save();
           } else {
               new Schema({
                   Guild: message.guild.id,
                   Channel: channel.id,
               }).save();
           }
           message.reply(`${channel} has been set as the Welcome Channel of this server!`)
       })
    }
}