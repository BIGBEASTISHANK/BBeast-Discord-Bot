const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")

module.exports = {
    name: 'color',
    aliases: [''],
    permissions: [],
    cooldown: 0,
    async execute(client, message, cmd, args, Discord) {

        const color = args[0];
        if(!color) return message.reply(`Please enter a color, Example h!color red or d!color #000000`)

        const img = Canvas.color(color, false, 2048, 2048);
        
        const attachment = new MessageAttachment(img, "color.png");

        message.channel.send(attachment);

    }
};