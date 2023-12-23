const { Client, Message, MessageEmbed } = require('discord.js');
const Schema = require('../../models/welcomeChannel');

module.exports = {
    name: 'check-channel',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return  message.reply('You do not have permission to use this command');

       Schema.findOne({ Guild: message.guild.id}, async(err, data) => {
           if(!data) return message.reply('This server doesn\'t have a welcome channel yet!')

           const channel = client.channels.cache.get(data.Channel);

           message.reply(`Welcome channel for this server is ${channel}`);
       })
    }
}